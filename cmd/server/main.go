package main

import (
	"fmt"
	"os"

	"github.com/spf13/pflag"
	"github.com/thomaspoignant/go-feature-flag/cmd/server/api"
	"github.com/thomaspoignant/go-feature-flag/cmd/server/config"
	"github.com/thomaspoignant/go-feature-flag/cmd/server/docs"
	"github.com/thomaspoignant/go-feature-flag/cmd/server/log"
	"github.com/thomaspoignant/go-feature-flag/cmd/server/service"
	"go.uber.org/zap"
)

// version, releaseDate are override by the makefile during the build.
var version = "localdev"

const banner = `█▀▀ █▀█   █▀▀ █▀▀ ▄▀█ ▀█▀ █ █ █▀█ █▀▀   █▀▀ █   ▄▀█ █▀▀
█▄█ █▄█   █▀  ██▄ █▀█  █  █▄█ █▀▄ ██▄   █▀  █▄▄ █▀█ █▄█

     █▀█ █▀▀ █   ▄▀█ █▄█   █▀█ █▀█ █▀█ ▀▄▀ █▄█
     █▀▄ ██▄ █▄▄ █▀█  █    █▀▀ █▀▄ █▄█ █ █  █ 

GO Feature Flag Relay Proxy
_____________________________________________`

// @title GO Feature Flag relay proxy endpoints
// @description.markdown
// @contact.name GO feature flag relay proxy
// @contact.url https://gofeatureflag.org
// @contact.email contact@gofeatureflag.org
// @license.name MIT
// @license.url https://github.com/thomaspoignant/go-feature-flag/blob/main/LICENSE
// @x-logo {"url":"https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/logo_128.png"}
// @BasePath /
// @securitydefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization
// @description Use configured APIKeys in yaml config as authorization keys, disabled when this yaml config is not set.
func main() {
	// Init pFlag for config file
	f := pflag.NewFlagSet("config", pflag.ContinueOnError)
	f.String("config", "", "Location of your config file")
	_ = f.Parse(os.Args[1:])

	// Init logger
	zapLog := log.InitLogger()
	defer func() { _ = zapLog.Sync() }()

	// Loading the configuration in viper
	proxyConf, err := config.New(f, zapLog, version)
	if err != nil {
		zapLog.Fatal("error while reading configuration", zap.Error(err))
	}

	if err := proxyConf.IsValid(); err != nil {
		zapLog.Fatal("configuration error", zap.Error(err))
	}

	if !proxyConf.HideBanner {
		fmt.Println(banner)
	}

	// Init swagger
	docs.SwaggerInfo.Version = proxyConf.Version
	docs.SwaggerInfo.Host = fmt.Sprintf("%s:%d", proxyConf.Host, proxyConf.ListenPort)

	// Init services
	wsService := service.NewWebsocketService()
	defer wsService.Close() // close all the open connections
	proxyNotifier := service.NewNotifierRelayProxy(wsService)
	goff, err := service.NewGoFeatureFlagClient(proxyConf, zapLog, proxyNotifier)
	if err != nil {
		panic(err)
	}

	services := service.Services{
		MonitoringService:    service.NewMonitoring(goff),
		WebsocketService:     wsService,
		GOFeatureFlagService: goff,
	}
	// Init API server
	apiServer := api.New(proxyConf, services, zapLog)

	if proxyConf.StartAsAwsLambda {
		apiServer.StartAwsLambda()
	} else {
		apiServer.Start()
		defer func() { _ = apiServer.Stop }()
	}
}