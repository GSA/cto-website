#!/bin/sh
#
# Runs the cto-website container using the arguments passed to this script as
# the container's command.

docker run \
  --rm \
  --volume "$PWD:/srv/jekyll" \
  -p 4000:4000 \
  -p 35729:35729 \
  --name cto-website \
  cto-website \
  $*
