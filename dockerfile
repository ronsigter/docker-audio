FROM arm32v7/node:14.7.0-buster

RUN apt-get update -y
RUN apt-get install mpg123 alsa-utils -y
RUN apt-get install wget -y
RUN apt-get install make gcc g++ python udev -y


# RUN usermod -a -G audio node
RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node yarn.lock ./
RUN yarn install

COPY . .

CMD ["mpg123", "test.mp3"]
