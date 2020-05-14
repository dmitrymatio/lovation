import React from "react";
import { Box, Grommet, Image, Heading } from "grommet";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";

const shadowSVG = {
    "-webkit-filter": "drop-shadow(4px 4px 4px rgba(0,0,0,0.5))",
    "filter": "url(#drop-shadow)",
    "-ms-filter": "progid:DXImageTransform.Microsoft.Dropshadow(OffX=4, OffY=4, Color='#444')",
    "filter": "progid:DXImageTransform.Microsoft.Dropshadow(OffX=4, OffY=4, Color='#444')"
};

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
            style={shadowSVG}
          />
        </Box>
        <Heading color="white">Find Love Near your Location</Heading>
        <Box background="white" height="10vh" width="100vw"></Box>
      </Box>

      <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="12" dy="12" result="offsetblur" />
          <feFlood flood-color="rgba(0,0,0,0.5)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
    </Grommet>
  );
};

export default LandingPage;
