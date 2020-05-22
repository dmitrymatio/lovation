import gql from "graphql-tag";

const MESSAGES_QUERY = gql`
  query DirectMessages {
    messages {
      id
      content
      created_at
      updated_at
      sender {
        id
        username
        name
        profile_photo {
          url
        }
      }
      receiver {
        id
        username
        name
        profile_photo {
          url
        }
      }
    }
  }
`;
export default MESSAGES_QUERY;
