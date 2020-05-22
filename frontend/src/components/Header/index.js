import React from "react";
import { Anchor, Box, Grommet, Image, Menu } from "grommet";
import { Power, User, Home, Down } from "grommet-icons";
import theme from "../Theme";

export const Avatar = () => (
  <Box height="100%" width="25%" align="center" justify="center">
    <Menu
      size="xlarge"
      icon={<Down />}
      dropProps={{ align: { top: "bottom" } }}
      items={[
        { label: "Home", icon: <Home />, gap: "small", href: "/home" },
        {
          label: "Logout",
          icon: <Power />,
          reverse: true,
          gap: "small",
          onClick: () => {
            sessionStorage.clear();
          },
          href: "/",
        },
      ]}
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
