import React from "react";
import array from "lodash";
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

const filterMessages = (messages) => {
  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myUsername = myInfo.username;
  // filters out messages not intended for the signed in user
  const myChats = messages.filter((message) => {
    const sender = message.sender.username;
    const receiver = message.receiver.username;
    if (sender === myUsername || receiver === myUsername) {
      return true;
    } else {
      return false;
    }
  });

  const chats = [];

  myChats.filter((chat) => {
    const sender = chat.sender;
    const receiver = chat.receiver;
    if (sender.username !== myUsername) {
      chats.push(sender);
    } else {
      chats.push(receiver);
    }
  });

  //create a unique set of all users chatting with signed in user
  const uniqChats = array.uniqBy(chats, "username");

  // final object containing sepparated chat information based on the unique set
  let finalChats = [];
  uniqChats.forEach((chatUser) => {
    const chatMessages = myChats.filter((message) => {
      const sender = message.sender.username;
      const receiver = message.receiver.username;
      if (sender === chatUser.username || receiver === chatUser.username) {
        return true;
      } else {
        return false;
      }
    });
    finalChats.push({ chat_with: chatUser, messages: chatMessages });
  });
  finalChats.sort((a, b) => (a.id > b.id ? 1 : -1));
  return (
    <List
      border={{ color: "none" }}
      primaryKey={(chat) => {
        return <Chatbox chat={chat} />;
      }}
      data={finalChats}
    />
  );
};

const Messages = () => {
  return (
    <Grommet theme={theme}>
      <Box
        direction="column"
        align="center"
        width="100vw"
        height="100vh"
        background={{
          "image": "linear-gradient(165deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)",
          "opacity": "medium"
        }}
      >
        <Box
          direction="column"
          justify="between"
          align="center"
          background={{ "image": "linear-gradient(135deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)" }}
          overflow="hidden"
          className="w-full h-full land:w-1/4"
          elevation="xlarge"
        >
          <Header />
          <Box
            height="100%"
            width="100%"
            align="center"
            justify="start"
            pad="medium"
            gap="medium"
          >
            <Query query={MESSAGES_QUERY}>
              {({ data: { messages } }) => {
                return filterMessages(messages);
              }}
            </Query>
          </Box>
          <AppBar />
        </Box>
      </Box>
    </Grommet>
  );
};

export default Messages;
