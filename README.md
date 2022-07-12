# Icy Tools Integration

1. Did you finish everything you wanted to? If not, what would you do if you spent another hour or two working on this?
I would have liked to have more time to propperly display data coming back from icy tools api. Looking back over the assignment it kinda called out a custom hook for useTrendingCollections could have been good. I went with the out of the box apollo getQuery hook to run the query when a user is connected with MetaMask which can handle data caching. I handled eveything on the client side which is fine for this application but doesn't flex some of the powers of Next.js

2. What part of this project do you feel the best about? This can be anything!
The Web3 integration was handled nicely. Folder structure and orginization are also pretty good.

3. What did you struggle with the most or feel rushed on the most?
This was a good amount of work to complete in the timebox. I could have hacked it a bit faster if I didn't pay attention to folder structure, using components, etc. I had a little bit of a challenge finding the correct types in the icy tools explorer for the query. I was hoping for a quick cut and paste on those but I ended up just making them.

## Getting Started

Configure your Icy Tools API Key in the .env file

install dependencies with `npm install` or `yarn install`

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

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
