import gql from "graphql-tag";

const PROFILES_QUERY = gql`
  query Users {
    users {
      id
      name
      username
    }
  }
`;
export default PROFILES_QUERY;
