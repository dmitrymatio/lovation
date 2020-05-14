import React from "react";
import { Box, Grommet, Image, Heading } from "grommet";
import theme from "../../components/Theme";

const LandingPage = () => {
  return (
    <Grommet theme={theme}>
      <Box
        direction="column"
        justify="center"
        align="center"
        background="linear-gradient(135deg, rgba(247,172,112,0.6) 30%, rgba(130,197,205,0.6) 70%)"
        width="100vw"
        height="100vh"
        overflow="hidden"
      >
        <Box width="50vw">
          <Image
            src={window.location.origin + "/lovation-logo.png"}
            fill="horizontal"
          />
        </Box>
        <Heading color="white">Find Love Near your Location</Heading>
        <Box background="white" height="10vh" width="100vw"></Box>
      </Box>
    </Grommet>
  );
};

export default LandingPage;
