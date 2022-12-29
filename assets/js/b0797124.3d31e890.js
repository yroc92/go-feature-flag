"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5804],{81974:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v0.28.1","label":"v0.28.1","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-v0.28.1","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Home","href":"/docs/v0.28.1/","docId":"index"},{"type":"link","label":"Getting started","href":"/docs/v0.28.1/quickstart","docId":"quickstart"},{"type":"link","label":"Configuration","href":"/docs/v0.28.1/configuration","docId":"configuration"},{"type":"link","label":"Configure a flag","href":"/docs/v0.28.1/flag_format","docId":"flag_format"},{"type":"category","label":"Store your flag file","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Custom Retriever","href":"/docs/v0.28.1/flag_file/custom","docId":"flag_file/custom"},{"type":"link","label":"File","href":"/docs/v0.28.1/flag_file/file","docId":"flag_file/file"},{"type":"link","label":"Github","href":"/docs/v0.28.1/flag_file/github","docId":"flag_file/github"},{"type":"link","label":"Google Cloud Storage","href":"/docs/v0.28.1/flag_file/google_cloud_storage","docId":"flag_file/google_cloud_storage"},{"type":"link","label":"HTTP endpoint","href":"/docs/v0.28.1/flag_file/http","docId":"flag_file/http"},{"type":"link","label":"Kubernetes configmaps","href":"/docs/v0.28.1/flag_file/kubernetes_configmaps","docId":"flag_file/kubernetes_configmaps"},{"type":"link","label":"S3 Bucket","href":"/docs/v0.28.1/flag_file/s3","docId":"flag_file/s3"}],"href":"/docs/v0.28.1/flag_file/"},{"type":"link","label":"Targeting users with flags","href":"/docs/v0.28.1/users","docId":"users"},{"type":"category","label":"Rollout strategies","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Canary Release","href":"/docs/v0.28.1/rollout/canary","docId":"rollout/canary"},{"type":"link","label":"Experimentation rollout / A/B Testing","href":"/docs/v0.28.1/rollout/experimentation","docId":"rollout/experimentation"},{"type":"link","label":"Progressive rollout","href":"/docs/v0.28.1/rollout/progressive","docId":"rollout/progressive"},{"type":"link","label":"Scheduled rollout","href":"/docs/v0.28.1/rollout/scheduled","docId":"rollout/scheduled"}],"href":"/docs/v0.28.1/rollout/"},{"type":"category","label":"Export data","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Custom exporter","href":"/docs/v0.28.1/data_collection/custom","docId":"data_collection/custom"},{"type":"link","label":"File Exporter","href":"/docs/v0.28.1/data_collection/file","docId":"data_collection/file"},{"type":"link","label":"Google Cloud Storage Exporter","href":"/docs/v0.28.1/data_collection/google_cloud_storage","docId":"data_collection/google_cloud_storage"},{"type":"link","label":"Log Exporter","href":"/docs/v0.28.1/data_collection/log","docId":"data_collection/log"},{"type":"link","label":"S3 Exporter","href":"/docs/v0.28.1/data_collection/s3","docId":"data_collection/s3"},{"type":"link","label":"Webhook Exporter","href":"/docs/v0.28.1/data_collection/webhook","docId":"data_collection/webhook"}],"href":"/docs/v0.28.1/data_collection/"},{"type":"category","label":"Notify flag changes","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Custom Notifier","href":"/docs/v0.28.1/notifier/custom","docId":"notifier/custom"},{"type":"link","label":"Slack Notifier","href":"/docs/v0.28.1/notifier/slack","docId":"notifier/slack"},{"type":"link","label":"Webhook Notifier","href":"/docs/v0.28.1/notifier/webhook","docId":"notifier/webhook"}],"href":"/docs/v0.28.1/notifier/"},{"type":"link","label":"Frequently Asked Questions","href":"/docs/v0.28.1/faq","docId":"faq"}]},"docs":{"configuration":{"id":"configuration","title":"Configuration","description":"go-feature-flag needs to be initialized to be used.","sidebar":"tutorialSidebar"},"data_collection/custom":{"id":"data_collection/custom","title":"Custom exporter","description":"To create a custom exporter you must have a struct that implements the exporter.Exporter interface.","sidebar":"tutorialSidebar"},"data_collection/file":{"id":"data_collection/file","title":"File Exporter","description":"The file exporter will collect the data and create a new file in a specific folder everytime we send the data.","sidebar":"tutorialSidebar"},"data_collection/google_cloud_storage":{"id":"data_collection/google_cloud_storage","title":"Google Cloud Storage Exporter","description":"The Google Cloud Storage exporter will collect the data and create a new file in a specific folder everytime we send the data.","sidebar":"tutorialSidebar"},"data_collection/index":{"id":"data_collection/index","title":"Export data","description":"If you want to export data about how your flag are used, you can use the DataExporter.","sidebar":"tutorialSidebar"},"data_collection/log":{"id":"data_collection/log","title":"Log Exporter","description":"The log exporter is here mostly for backward compatibility (originally every variation were logged, but it can be a lot of data for a default configuration).","sidebar":"tutorialSidebar"},"data_collection/s3":{"id":"data_collection/s3","title":"S3 Exporter","description":"The S3 exporter will collect the data and create a new file in a specific folder everytime we send the data.","sidebar":"tutorialSidebar"},"data_collection/webhook":{"id":"data_collection/webhook","title":"Webhook Exporter","description":"The Webhook exporter will collect the data and send them via an HTTP POST request to the specified endpoint.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"Why using feature flags?","sidebar":"tutorialSidebar"},"flag_file/custom":{"id":"flag_file/custom","title":"Custom Retriever","description":"To create a custom retriever you must have a struct that implements the Retriever interface.","sidebar":"tutorialSidebar"},"flag_file/file":{"id":"flag_file/file","title":"File","description":"The File Retriever will read a local file to get your flags.","sidebar":"tutorialSidebar"},"flag_file/github":{"id":"flag_file/github","title":"Github","description":"The Github Retriever","sidebar":"tutorialSidebar"},"flag_file/google_cloud_storage":{"id":"flag_file/google_cloud_storage","title":"Google Cloud Storage","description":"The Google Cloud Storage Retriever","sidebar":"tutorialSidebar"},"flag_file/http":{"id":"flag_file/http","title":"HTTP endpoint","description":"The HTTP Retriever","sidebar":"tutorialSidebar"},"flag_file/index":{"id":"flag_file/index","title":"Store your flag file","description":"The module supports different ways of retrieving the flag file.","sidebar":"tutorialSidebar"},"flag_file/kubernetes_configmaps":{"id":"flag_file/kubernetes_configmaps","title":"Kubernetes configmaps","description":"The Kubernetes Retriever","sidebar":"tutorialSidebar"},"flag_file/s3":{"id":"flag_file/s3","title":"S3 Bucket","description":"The S3Retriever will use the aws-sdk to access your flag in an S3 bucket.","sidebar":"tutorialSidebar"},"flag_format":{"id":"flag_format","title":"Configure a flag","description":"go-feature-flag core feature is to centralize all your feature flags in a source file, and to avoid hosting and maintaining a backend server to manage them.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Home","description":"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.","sidebar":"tutorialSidebar"},"notifier/custom":{"id":"notifier/custom","title":"Custom Notifier","description":"To create a custom notifier you must have a struct that implements the","sidebar":"tutorialSidebar"},"notifier/index":{"id":"notifier/index","title":"Notify flag changes","description":"If you want to be informed when a flag has changed, you can configure a notifier.","sidebar":"tutorialSidebar"},"notifier/slack":{"id":"notifier/slack","title":"Slack Notifier","description":"The Slack notifier allows you to get notification on your favorite slack channel when an instance of go-feature-flag is detecting changes in the configuration file.","sidebar":"tutorialSidebar"},"notifier/webhook":{"id":"notifier/webhook","title":"Webhook Notifier","description":"The Webhook notifier will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected.","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Getting started","description":"Installation","sidebar":"tutorialSidebar"},"rollout/canary":{"id":"rollout/canary","title":"Canary Release","description":"Canary release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody.","sidebar":"tutorialSidebar"},"rollout/experimentation":{"id":"rollout/experimentation","title":"Experimentation rollout / A/B Testing","description":"An experimentation rollout is when your flag is configured to be served only for a determined time.","sidebar":"tutorialSidebar"},"rollout/index":{"id":"rollout/index","title":"Rollout strategies","description":"A critical part of every new feature release is orchestrating the actual launch schedule between Product, Engineering, and Marketing teams.","sidebar":"tutorialSidebar"},"rollout/progressive":{"id":"rollout/progressive","title":"Progressive rollout","description":"A progressive rollout allows you to increase the percentage of your flag over time.","sidebar":"tutorialSidebar"},"rollout/scheduled":{"id":"rollout/scheduled","title":"Scheduled rollout","description":"Scheduling introduces the ability for users to changes their flags for future points in time.","sidebar":"tutorialSidebar"},"users":{"id":"users","title":"Targeting users with flags","description":"Users","sidebar":"tutorialSidebar"}}}')}}]);