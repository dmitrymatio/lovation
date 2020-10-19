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
  Avatar,
  Chart,
  Meter,
} from "grommet";
import { Chat, Car, TreeOption } from "grommet-icons";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";

import Header from "../../components/Header";
import AppBar from "../../components/AppBar";

const Home = () => {
  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myName = myInfo.name;
  const complete = 60;
  return (
    <Grommet theme={theme}>
      <Box
        direction="column"
        justify="between"
        align="center"
        background={{
          "image": "linear-gradient(165deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)",
          "opacity": "medium"
        }}
        width="100vw"
        height="100vh"
        overflow="hidden"
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
            height="80vh"
            width="100vw"
            pad="large"
            align="center"
            gap="medium"
          >
            <Box
              justify="center"
              round="small"
              pad="medium"
              align="center"
              gap="small"
              elevation="small"
              width="90%"
            >
              <Heading level="2">Welcome Back {myName ? myName.split(" ")[0] : "Friend"}</Heading>
              <Stack anchor="center">
                <Meter
                  size="small"
                  type="circle"
                  values={[
                    {
                      value: complete,
                      label: "sixty",
                      onClick: () => { },
                    },
                  ]}
                  aria-label="meter"
                />
                <Avatar
                  size="20vh"
                  elevation="small"
                  src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                />
              </Stack>
              <Text>Your profile is {complete}% complete</Text>
            </Box>
            <Box
              justify="center"
              round="small"
              pad="medium"
              align="start"
              gap="small"
              elevation="small"
              width="90%"
            >
              <Heading level="3">Offers:</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Text>
            </Box>

            <Box
              justify="center"
              round="small"
              pad="medium"
              align="start"
              gap="small"
              elevation="small"
              width="90%"
            >
              <Heading level="3">News:</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Text>
            </Box>
          </Box>
          <AppBar />
        </Box>
      </Box>
    </Grommet>
  );
};

export default Home;
