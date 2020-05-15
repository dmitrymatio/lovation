import React from "react";
import {
  Box,
  Grommet,
  Image,
  Heading,
  Stack,
  Text,
  Button,
  Tabs,
  Tab,
  Main,
  List,
} from "grommet";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";

import Header from "../../components/Header";
import AppBar from "../../components/AppBar";
import Chatbox from "../../components/Chatbox";

import Query from "../../components/Query";
import MESSAGES_QUERY from "../../queries/messages/messages";

const allChats = (messages) => {
  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myUsername = myInfo.username;

  const myChats = messages.filter((message) => {
    const sender = message.sender.username;
    const receiver = message.receiver.username;
    if (sender === myUsername || receiver === myUsername) {
      return true;
    } else {
      return false;
    }
  });

  return myChats;
};

const Messages = () => {
  return (
    <Grommet theme={theme}>
      <Box
        direction="column"
        justify="between"
        align="center"
        background="linear-gradient(135deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)"
        width="100vw"
        height="100vh"
        overflow="hidden"
      >
        <Header />
        <Box height="100%" width="100%" align="center" justify="center">
          <Heading>My chats</Heading>
          <Query query={MESSAGES_QUERY}>
            {({ data: { messages } }) => {
              return <List primaryKey="content" secondaryKey="" data={allChats(messages)} />;
            }}
          </Query>
        </Box>
        <AppBar />
      </Box>
    </Grommet>
  );
};

export default Messages;
