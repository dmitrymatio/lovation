import gql from "graphql-tag";

const MESSAGES_QUERY = gql`
  query DirectMessages {
    messages {
      id
      content
      created_at
      updated_at
      sender {
        username
      }
      receiver {
        username
      }
    }
  }
`;
export default MESSAGES_QUERY;
