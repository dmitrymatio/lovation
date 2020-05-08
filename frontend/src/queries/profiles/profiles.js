import gql from "graphql-tag";

const PROFILES_QUERY = gql`
  query Users {
    users {
      id
      username
    }
  }
`;
export default PROFILES_QUERY;
