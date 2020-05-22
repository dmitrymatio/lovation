import gql from "graphql-tag";

const DELETE_MESSAGE_MUTATION = gql`
  mutation deleteMessage($id: ID!) {
    deleteMessage (input: {where:{id:$id}}) {
        message {
          id
        }
      }
  }
`;

export default DELETE_MESSAGE_MUTATION;
