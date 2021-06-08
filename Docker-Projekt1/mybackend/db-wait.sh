#!/bin/sh

set -e

host="$1"

shift

cmd="$@"

>&2 echo "Waiting for db"

sleep 10

>&2 echo "Start mybackend :)"

exec $cmd