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
        name
        profile_photo {
          url
        }
      }
      receiver {
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
