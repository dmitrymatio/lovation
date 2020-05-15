import React from "react";
import { Anchor, Box, Grommet, Header } from "grommet";
import theme from "../Theme";

const Nav = () => (
  <Grommet theme={theme}>
    <Box>
      <Avatar />
      <Box direction="row" gap="medium">
        <Anchor label="Home" href="#" />
        <Anchor label="Profile" href="#" />
      </Box>
    </Box>
  </Grommet>
);

export default Nav;
