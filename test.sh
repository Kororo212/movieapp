#!/bin/bash
mkdir tempdir
mkdir tempdir/templates
mkdir tempdir/static
cp sample_app.py tempdir/.
cp -r templates/* tempdir/templates/.
cp -r static/* tempdir/static/.
echo "FROM node:alpine" >> tempdir/Dockerfile
echo "USER root" >> tempdir/Dockerfile
echo "RUN npm install" >> tempdir/Dockerfile
echo "COPY ./ ./" >> tempdir/Dockerfile
echo "COPY ./ ./" >> tempdir/Dockerfile
echo "EXPOSE 5050" >> tempdir/Dockerfile
echo "CMD ["npm","start"]" >> tempdir/Dockerfile
USER root
USER indr
cd tempdir
docker build . -t sampleapp 
docker run -t -d -p 5050:5050 --name samplerunning sampleapp
docker ps -a
