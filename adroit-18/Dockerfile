
FROM node:14-slim

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .


RUN npm run build


EXPOSE 3000

# Command to run your React app (if applicable)
CMD ["npm", "start"]
