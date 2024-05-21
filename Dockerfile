FROM node:18

# # Create a new user named "nodeuser"
# RUN useradd --user-group --create-home --system --skel /dev/null --shell /bin/false nodeuser

# # Switch to the new user
# USER nodeuser

WORKDIR /app
EXPOSE 3000 
ENV NODE_ENV production


COPY package*.json ./
COPY tsconfig.json ./
COPY swagger.json ./
COPY .env ./
COPY .env.prod ./
COPY src/ ./src

RUN npm install --ignore-scripts

RUN npm run build:prod

CMD npm start