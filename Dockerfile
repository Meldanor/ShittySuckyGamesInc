FROM node:15 AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN NODE_ENV=production yarn build

FROM fholzer/nginx-brotli:v1.19.1

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
