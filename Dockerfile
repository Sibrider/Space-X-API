FROM node:12.14.1-alpine3.9 as angular
WORKDIR /home/node/app
EXPOSE 4200/tcp
COPY . .
RUN apk add git && \
    npm install -g @angular/cli
RUN npm install

FROM angular as development
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM angular as builder
RUN ng build --prod --output-path=dist


FROM nginx
EXPOSE 80/tcp
VOLUME [ "/usr/share/nginx/html" ]
COPY --from=builder /home/node/app/dist/* /usr/share/nginx/html/
