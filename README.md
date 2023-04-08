## Full Stack Netflix

To build this project I have used:

- React.JS - for the frontend
- Next.JS - for routing and server-side rendering
- Tailwind - for CSS management
- Prisma - for data management
- MongoDB - for backend storage
- NextAuth - for authentication

### Environment Setup

To create the project:

```bash
npx create-next-app --typescript
```

Give a name to the project. In this case `full-stack-netflix`
Clean up the project by deleting everything inside `index.tsx` file and `globals.css` file. Also delete the `Home.module.css` file inside the `styles` folder.
To install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
```

and

```bash
npx tailwindcss init -p
```

Configure the `tailwindcss.config.js` by inserting the following 3 lines inside of `content: []` property.

```js
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
```

Inside the `globals.css` file insert the following 3 lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Auth Screen UI

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

In Next.JS when we create multi-page applications we need to put all the pages inside the `pages` directory and we can access any page by going to [http://localhost:3000/page_name](http://localhost:3000/page_name)

We create our custom input component for all kinds of input tasks accross the app. In the `Input` component we interface `InputProps` with properties like id, onChange, value, label, type. This will make our job easy to perform all the input tasks.

<br>
![image](/public/screenshots/auth_screen_ui.png)
<br>

### Prisma, NextAuth, MongoDB Setup

To install Prisma go to terminal and enter: `npm install -D prisma`
To install Prisma client go to terminal and enter: `npm install @prisma/client`
To initialize a new Prisma schema go to terminal and enter: `npx prisma init`
Go to `prisma/schema.prisma` and update the follwing code:

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

<br>

Create a new folder called `lib` and inside it create a new file called `prismadb.ts`
Explanation of code inside `prismadb.ts`:
Because of Next.js hot reloading on every code change our app re-runs. And Prisma create a bunch of Prisma Client instances. And it can cause an error called `too much prisma instances`
To prevent this error we save Prisma Client on a global file because global files are not affected by hot reloading.

Create a `global.d.ts` file in the root directory and write the following code:

```ts
import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
```

<br>

Now go to `MongoDB Atlas` and create a new project named `Netflix Clone` and create a cluster. Then click on `Connect` select `Connect via VS Code`. It will give you a link. Copy that link and paste it in the `.env` file where the `DATABASE_URL` exists.

Now create the schema for the database by creating models inside the `schema.prisma` file.
After writing the schema go to the terminal and enter: `npx prisma db push` and this will create the database inside the MongoDB cluster.

<br>
![image](/public/screenshots/creating_db_using_prisma.png)
<br>

In Next.JS when we create multi-page applications we need to put all the pages inside the `pages` directory and we can access any page by going to [http://localhost:3000/page_name](http://localhost:3000/page_name)

We create our custom input component for all kinds of input tasks accross the app. In the `Input` component we interface `InputProps` with properties like id, onChange, value, label, type. This will make our job easy to perform all the input tasks.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
