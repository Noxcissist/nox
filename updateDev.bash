#!/bin/bash
# -------------------------------------------------------------------------

rm -fr build
cd client
npm run build
cd ..

#Starts the program
node server.js