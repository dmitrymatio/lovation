import React from "react";
import { Anchor, Box, Grommet, Image } from "grommet";
import theme from "../Theme";

export const Avatar = () => (
  <Box height="100%" round="full" border="all" overflow="hidden">
    <Image
      fill="vertical"
      fit="contain"
      src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
    />
  </Box>
);

export const Logo = () => (
  <Box height="100%">
    <Image
      src={window.location.origin + "/lovation-logo.png"}
      fill="vertical"
    />
  </Box>
);

const Header = () => (
  <Grommet theme={theme}>
    <Box
      width="100vw"
      height="10vh"
      direction="row"
      align="center"
      background="light-3"
      pad="medium"
      justify="between"
      elevation="xsmall"
    >
      <Logo />
      <Avatar />
    </Box>
  </Grommet>
);

export default Header;
