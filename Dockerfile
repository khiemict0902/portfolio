FROM node:lts-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /app



COPY --from=build --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3000

CMD ["node", "server.js"]

