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
} from "grommet";
import { Chat, Car, TreeOption } from "grommet-icons";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";

import Header from "../../components/Header";
import AppBar from "../../components/AppBar";

const Home = () => {
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
        <Box height="100%" width="100%">

            
        </Box>
        <AppBar />
      </Box>
    </Grommet>
  );
};

export default Home;
