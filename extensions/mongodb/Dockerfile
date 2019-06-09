FROM mongo:latest

EXPOSE 27017
COPY ./mongod.conf /etc/mongod.conf

VOLUME /var/log/mongodb/

ENTRYPOINT [ "mongod", "--config", "/etc/mongod.conf" ]
