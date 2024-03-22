#!/bin/bash

while netstat -lnt | awk '$4 ~ /:3000$/ {exit 1}'; do sleep 2; done
