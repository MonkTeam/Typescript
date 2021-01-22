FROM ubuntu:20.04

# install ca-certificates so that HTTPS works consistently
RUN pkg install aria2 nodejs npm git bash
RUN npm install -g typescript
      
RUN git clone https://github.com/MonkTeam/Typescript
RUN cd Typescript

# To handle not get uid/gid error while installing a npm package
RUN npm config set unsafe-perm true

RUN npm install -g typescript
RUN npm install

CMD ["bash","start.sh"]
