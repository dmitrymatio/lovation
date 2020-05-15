import React from "react";
import { Box, Grommet, Image, Heading, Stack, Text, Button } from "grommet";
import { FormNext } from "grommet-icons";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";

import Header from "../../components/Header";

const Home = () => {
  return (
    <Grommet theme={theme}>
      <Box
        direction="column"
        justify="center"
        align="center"
        background="linear-gradient(135deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)"
        width="100vw"
        height="100vh"
        overflow="hidden"
      >
        <Header />
      </Box>
    </Grommet>
  );
};

export default Home;
