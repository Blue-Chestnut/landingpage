FROM node:lts-alpine AS base

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 3: Production server
FROM base AS runner

EXPOSE 3000
CMD ["npm", "run", "start"]