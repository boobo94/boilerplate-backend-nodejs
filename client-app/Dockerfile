# build stage
FROM node:14.17.4-alpine as build-stage
WORKDIR /usr/src/client-app
COPY ./client-app/package*.json ./
RUN npm install
COPY ./client-app .
RUN npm run build

FROM nginx
COPY ./nginx/default-client-app.conf /etc/nginx/conf.d/default-client-app.conf
COPY --from=build-stage /usr/src/client-app/dist /usr/share/nginx/html
