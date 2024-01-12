FROM node

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

EXPOSE 4173

CMD ["pnpm", "preview"]