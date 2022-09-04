FROM node:14.15.0-alpine

ARG REVISION \
    GIT_BRANCH

LABEL git-rev="${REVISION}" \
      git-branch="${GIT_BRANCH}"

RUN apk add nginx supervisor && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    echo "daemon off;" >> /etc/nginx/nginx.conf && \
    rm /etc/nginx/conf.d/default.conf && \
    mkdir /run/nginx && \
    mkdir /etc/nginx/ssl && \
    mkdir /etc/nginx/ssl/live && \
    mkdir /etc/nginx/ssl/archive && \
    mkdir /etc/nginx/ssl/live/anpanov.ru && \
    mkdir /etc/nginx/ssl/archive/anpanov.ru && \
    mkdir /code

COPY nginx.conf /etc/nginx/conf.d/
COPY supervisord.conf /etc/supervisor/conf.d/
COPY . /code/

WORKDIR /code

RUN npm i --only=production \
    && npm cache clean --force

CMD /usr/bin/supervisord
