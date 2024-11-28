FROM node:23.3.0-alpine3.20
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run lint
RUN pnpm run  prisma:deploy
RUN pnpm run build
CMD [ "pnpm", "start" ]
