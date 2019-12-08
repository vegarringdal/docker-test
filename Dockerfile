FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 443
EXPOSE 80
CMD [ "node", "./src/main.js" ]


# how to build :
# docker build -t simple/web .

# to run---
# docker run -v /data/web:/data -p 443:443 -p 80:80 -d simple/web
