#!/bin/bash
echo "installing npm dependencies"
npm install
wait 2s
echo "starting rey-stalker" 
node index.js
