import { ApolloClient } from "apollo-client";
import { ApolloLink, split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const wsLink = new WebSocketLink({
  uri: `ws://lovation-backend-api.herokuapp.com/graphql`,
  options: {
    reconnect: true,
  },
});

const token = JSON.parse(sessionStorage.getItem("jwtToken"));
/* `Bearer ${token}` === 'Bearer "token"' careful!*/

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BACK_END_URL}/graphql`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const cache = new InMemoryCache();

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache,
});

export default client;
