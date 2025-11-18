# build stage
FROM node:22-alpine3.22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# run stage
FROM node:22-alpine3.22 AS runner
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","start"]