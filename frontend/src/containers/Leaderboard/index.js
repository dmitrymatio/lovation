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
  Distribution,
} from "grommet";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";
import { Trophy } from "grommet-icons";
import Header from "../../components/Header";
import AppBar from "../../components/AppBar";
import ProfileCard from "../../components/Profiles";
import Query from "../../components/Query";
import PROFILES_QUERY from "../../queries/profiles/profiles";

const Leaderboard = () => {
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
        <Box
          height="100%"
          width="100%"
          align="center"
          justify="center"
          pad="medium"
          gap="medium"
        >
          <Box
            justify="center"
            round="small"
            pad="medium"
            align="center"
            gap="small"
            elevation="small"
          >
            <Trophy size="large" />
            <Query query={PROFILES_QUERY}>
              {({ data: { users } }) => {
                return (
                  <List
                    primaryKey="name"
                    secondaryKey="score"
                    data={array.sortBy(users, "score").reverse()}
                  />
                );
              }}
            </Query>
          </Box>
        </Box>
        <AppBar />
      </Box>
    </Grommet>
  );
};

export default Leaderboard;
