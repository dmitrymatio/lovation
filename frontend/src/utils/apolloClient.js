import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const token =JSON.parse(sessionStorage.getItem("jwtToken"));
/* `Bearer ${token}` === 'Bearer "token"' careful!*/

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BACK_END_URL}/graphql`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
