# Install dependencies only when needed
FROM node:16-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install

ENV NEXT_TELEMETRY_DISABLED 1

ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_CMS_GRAPHQL_URL
ARG NEXT_PUBLIC_CMS_URL
ARG NEXT_PUBLIC_ABQORY_YOUTUBE_CHANNEL_ID
ARG NEXT_PUBLIC_YOUTUBE_API_KEY

RUN pnpm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

RUN npm i -g pnpm

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app ./

USER nextjs

CMD ["pnpm", "start"]

