# BUILD
FROM node:lts-alpine3.20 AS build
WORKDIR /app
COPY ../../.  /app
RUN npm install
RUN npm run build

# Deployment
FROM nginx:1.26-perl
COPY --from=build /app/deployment/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/application-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
