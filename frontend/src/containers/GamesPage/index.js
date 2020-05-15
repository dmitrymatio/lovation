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
        <Box height="100%" width="100%" align="center" justify="around">
          <Heading>Games</Heading>
          <Box width="100%" height="50%" direction="row" justify="around">
            <Box
              width="40%"
              height="60%"
              background="white"
              round="large"
              elevation="medium"
              overflow="hidden"
              align="center"
              justify="start"
            >
              <Box
                width="100%"
                height="60%"
                background="#FC7753"
                align="center"
                justify="center"
              >
                <Box
                  round="full"
                  background="white"
                  width="80px"
                  height="80px"
                  align="center"
                  justify="center"
                >
                  <Box
                    round="full"
                    background="white"
                    width="45px"
                    height="45px"
                    align="center"
                    justify="center"
                  >
                    <Image
                      src={window.location.origin + "/fortune-cookie.png"}
                    />
                  </Box>
                </Box>
              </Box>
              <Text textAlign="center" margin="small">
                Love Horoscope
              </Text>
            </Box>

            <Box
              width="40%"
              height="60%"
              background="white"
              round="large"
              elevation="medium"
              overflow="hidden"
              align="center"
              justify="start"
            >
              <Box
                width="100%"
                height="60%"
                background="#82C5CD"
                align="center"
                justify="center"
              >
                <Box
                  round="full"
                  background="white"
                  width="80px"
                  height="80px"
                  align="center"
                  justify="center"
                >
                  <Box
                    round="full"
                    background="white"
                    width="45px"
                    height="45px"
                    align="center"
                    justify="center"
                  >
                    <Image
                      src={window.location.origin + "/blue-heart.png"}
                    />
                  </Box>
                </Box>
              </Box>
              <Text textAlign="center" margin="small">
                Love Horoscope
              </Text>
            </Box>
          </Box>
        </Box>
        <AppBar />
      </Box>
    </Grommet>
  );
};

export default Messages;
