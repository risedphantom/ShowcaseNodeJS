FROM node:14.15.0-alpine

MAINTAINER Anton Panov

# Set up Nginx and Supervisor
RUN apk add nginx supervisor

# Redirect output
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
EXPOSE 80 443

# Make NGINX run on the foreground and copy configs
RUN echo "daemon off;" >> /etc/nginx/nginx.conf \
    && rm /etc/nginx/conf.d/default.conf \
    && mkdir /run/nginx \
    && mkdir /etc/nginx/ssl \
    && mkdir /etc/nginx/ssl/live \
    && mkdir /etc/nginx/ssl/archive \
    && mkdir /etc/nginx/ssl/live/anpanov.ru \
    && mkdir /etc/nginx/ssl/archive/anpanov.ru

COPY nginx.conf /etc/nginx/conf.d/
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Install application
RUN mkdir /code
WORKDIR /code
COPY package*.json ./
RUN npm i --only=production \
    && npm cache clean --force

COPY . /code/

CMD /usr/bin/supervisord
