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
import { Gremlin } from "grommet-icons";

import Header from "../../components/Header";
import AppBar from "../../components/AppBar";

import Query from "../../components/Query";
import PROFILES_QUERY from "../../queries/profiles/profiles";

const popMeFromList = (users) => {
  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myId = myInfo.id;
  const finalList = users.filter((user) => user.id != myId);
  console.log(finalList);
  return finalList;
};

const Profiles = () => {
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
          <Heading>People near you</Heading>
          <Query query={PROFILES_QUERY}>
            {({ data: { users } }) => {
              const otherUsers = popMeFromList(users);
              return <List primaryKey="name" data={otherUsers} pad="medium" />;
            }}
          </Query>
        </Box>
        <AppBar />
      </Box>
    </Grommet>
  );
};

export default Profiles;
