FROM node:alpine

WORKDIR /app

ARG VITE_MAPBOX_KEY
ARG VITE_BASE_URL
ARG VITE_ENCRYPT_KEY

COPY . .

RUN npm i pnpm -g

RUN pnpm i

EXPOSE 5173

# Generate .env file with value from argument
RUN echo "VITE_MAPBOX_KEY=${VITE_MAPBOX_KEY}" >> .env
RUN echo "VITE_BASE_URL=${VITE_BASE_URL}" >> .env
RUN echo "VITE_ENCRYPT_KEY=${VITE_ENCRYPT_KEY}" >> .env

CMD ["pnpm", "run", "dev"]