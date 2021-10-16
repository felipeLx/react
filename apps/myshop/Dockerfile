FROM node
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]