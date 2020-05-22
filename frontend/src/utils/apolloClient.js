import { ApolloClient } from "apollo-client";
import { ApolloLink, split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";



const token = JSON.parse(sessionStorage.getItem("jwtToken"));
/* `Bearer ${token}` === 'Bearer "token"' careful!*/

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BACK_END_URL}/graphql`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

/* const wsLink = new WebSocketLink({
  uri: "ws://localhost:1337/graphql",
  options: {
    reconnect: true,
  },
}); */

/* const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
); */

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

export default client;
