import gql from "graphql-tag";

const CREATE_MESSAGE_MUTATION = gql`
  mutation createMessage($content: String!, $sender: ID!, $receiver: ID!) {
    createMessage(
      input: {
        data: { content: $content, sender: $sender, receiver: $receiver }
      }
    ) {
      message {
        id
        content
      }
    }
  }
`;

export default CREATE_MESSAGE_MUTATION;
