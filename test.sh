#!/bin/bash
mkdir app
mkdir app/src
mkdir app/public

cp package.json app/.
cp -r src/* app/src/.
cp -r public/* app/public/.
echo "FROM node:lastest" >> app/Dockerfile
echo "USER root" >> app/Dockerfile
echo "WORKDIR /app/" >> app/Dockerfile
echo "RUN npm install" >> app/Dockerfile
echo "COPY package*.json /app" >> app/Dockerfile
echo "COPY ./ ./" >> app/Dockerfile
echo "EXPOSE 5050" >> app/Dockerfile
echo "CMD ["npm","start"]" >> app/Dockerfile
USER root
USER indr
cd app
docker build . -t movie_app 
docker run -t -d -p 5050:5050 --name sample_app movie_app
docker ps -a
