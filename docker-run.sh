#!/bin/sh
#
# Runs the cto-website container using the arguments passed to this script as
# the container's command.

server_port=4000
livereload_port=35729

docker run \
  --rm \
  --volume "$PWD:/srv/jekyll" \
  -p ${server_port}:${server_port} \
  -p ${livereload_port}:${livereload_port} \
  --name cto-website \
  cto-website \
  $*
