import gql from "graphql-tag";

const PROFILES_QUERY = gql`
  query Users {
    users {
      id
      name
    }
  }
`;
export default PROFILES_QUERY;
