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
import { Gremlin } from "grommet-icons";

import Header from "../../components/Header";
import AppBar from "../../components/AppBar";
import ProfileCard from "../../components/Profiles";
import Query from "../../components/Query";
import PROFILES_QUERY from "../../queries/profiles/profiles";

const popMeFromList = (users) => {
  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myId = myInfo.id;
  const finalList = users.filter((user) => user.id != myId);
  //sort based on score using lodash
  return array.sortBy(finalList, "score").reverse();
};

const Profiles = () => {
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
            <Query query={PROFILES_QUERY}>
              {({ data: { users } }) => {
                const otherUsers = popMeFromList(users);

                return (
                  <List
                    border={{ color: "none" }}
                    primaryKey={(user) => {
                      return <ProfileCard chat={user} />;
                    }}
                    data={otherUsers}
                  />
                );
              }}
            </Query>
          </Box>
          <AppBar />
        </Box>
      </Box>
    </Grommet>
  );
};

export default Profiles;
