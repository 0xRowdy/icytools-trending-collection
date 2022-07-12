import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.icy.tools/graphql",
  headers: { "x-api-key": `${process.env.REACT_APP_ICY_TOOLS_API_KEY}` },
  cache: new InMemoryCache(),
});

export default client;
