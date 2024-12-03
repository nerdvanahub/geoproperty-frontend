FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

EXPOSE 5173

CMD ["pnpm", "run", "dev"]