import React from "react";
import { Anchor, Box, Grommet, Header, Nav } from "grommet";
import { Chat, Gamepad, Favorite, Achievement } from "grommet-icons";
import theme from "../Theme";

const AppBar = () => (
  <Grommet theme={theme}>
    <Nav
      width="100vw"
      height="10vh"
      direction="row"
      align="center"
      background="light-3"
      pad="medium"
      justify="around"
      elevation="xlarge"
    >
      <Anchor
        icon={<Favorite size="medium" />}
        hoverIndicator
        href="/profiles"
      />
      <Anchor
        icon={<Achievement size="medium" />}
        hoverIndicator
        href="/leaderboard"
      />
      <Anchor icon={<Gamepad size="medium" />} hoverIndicator href="/games" />
      <Anchor icon={<Chat size="medium" />} hoverIndicator href="/messages" />
    </Nav>
  </Grommet>
);

export default AppBar;
