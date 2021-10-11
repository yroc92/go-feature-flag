#!/bin/bash

VERSION_LIST=$(mike list)
IFS=$'\n'
for i in ${VERSION_LIST}
do 
   : 
   echo ${i}
   echo "---"
done