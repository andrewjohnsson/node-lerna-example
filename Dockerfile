FROM node:alpine
#FROM node:alpine as context
EXPOSE 3000

ARG MONGO_HOST=localhost
ENV MONGO_HOST=${MONGO_HOST}

ARG HOME=/home/example
WORKDIR $HOME

COPY package.json yarn.lock $HOME/
RUN yarn install && yarn cache clean

COPY src $HOME/src
#
#FROM scratch
#COPY --from=context $HOME $HOME
#
#ENV HOME=/home/example
#WORKDIR $HOME

ENTRYPOINT [ "yarn", "start" ]
