# build stage
FROM node:14.17.4-alpine as build-stage
WORKDIR /usr/src/client-app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/client-app/dist /etc/nginx/html
