FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./frontend/package*.json ./

ENV NODE_ENV production
ENV BASE_API_URL http://localhost:8000/api/v1

RUN npm install
COPY ./frontend/ ./
RUN npm run build
RUN rm -rf ./node_modules/
RUN rm -rf ./src/


FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/dist/
COPY --from=build-stage /app/index.html /usr/share/nginx/html
COPY ./compose/frontend/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]