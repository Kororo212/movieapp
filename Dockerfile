FROM node:lastest
WORKDIR /app/
COPY packages.json .
COPY ./ ./
EXPOSE 3050
CMD ["npm","start"]
