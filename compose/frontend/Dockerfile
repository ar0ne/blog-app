FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./frontend/package*.json /app/
RUN npm install
COPY ./frontend/ /app/
RUN npm run build
RUN rm -rf ./node_modules


FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/dist/
COPY --from=build-stage /app/index.html /usr/share/nginx/html
COPY ./compose/frontend/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]