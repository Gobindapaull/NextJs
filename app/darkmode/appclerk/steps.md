- npx create-next-app@latest . -y
- npm run dev

- npm i @clerk/nextjs
- middelware.ts
- layout > <ClerkProvider></ClerkProvider>
- npm i convex
- components > providers > ConvexClientProvider.tsx
- layout > <ConvexClientProvider>{children}</ConvexClientProvider>

- npx convex dev
- convex > auth.config.ts
- convex > schema.ts
- convex > users.ts

- npm i svix
- convex > http.ts

- app > page.tsx

- mv .env test/.env

- mv .env ../.env
