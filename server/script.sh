#!/bin/sh

cd /home/app/server

##
# sets the variables
#
# Available variables are the keys in the json file. E.g., $EMAIL_TO_1
##
cat env.json | jq -r '. | to_entries | .[] | .key + "=\"" + .value + "\""' >> .env

# serve yarn
yarn serve
