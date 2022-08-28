#!/bin/bash
# -------------------------------------------------------------------------

rm package-lock*
rm -fr node_modules
rm -fr build
npm install

cd client
rm package-lock*
rm -fr node_modules
npm install
npm run build
cd ..

#Starts the program
node server.js