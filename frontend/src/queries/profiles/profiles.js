import gql from "graphql-tag";

const PROFILES_QUERY = gql`
  query Users {
    users {
      id
      name
      username
      score
      coins
      profile_photo {
        url
      }
    }
  }
`;
export default PROFILES_QUERY;
