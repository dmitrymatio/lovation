import React from "react";
import { Box, Grommet, Image, Heading, Stack, Text, Button } from "grommet";
import { FormNext } from "grommet-icons";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";

const shadowSVG = {
  "-webkit-filter": "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
  filter: "url(#drop-shadow)",
  "-ms-filter":
    "progid:DXImageTransform.Microsoft.Dropshadow(OffX=2, OffY=2, Color='#444')",
  filter:
    "progid:DXImageTransform.Microsoft.Dropshadow(OffX=2, OffY=2, Color='#444')",
};

const LandingPage = () => {
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
          <Box
            margin={{ top: "25vh" }}
            width="100%"
            direction="column"
            align="center"
            gap="medium"
          >
            <Box
              width="50%"
              animation={{
                type: "fadeIn",
                delay: 500,
                duration: 1000,
              }}
            >
              <Image
                src={window.location.origin + "/lovation-logo.png"}
                fill="horizontal"
                style={shadowSVG}
              />
            </Box>
            <Box
            margin={{
              "vertical": "10%",
            }}
              animation={[
                { type: "fadeIn", delay: 1000, duration: 2000 },
                { type: "slideLeft", delay: 1000, duration: 2000 },
              ]}
            >
              <Heading
                level="2"
                size="xlarge"
                color="white"
                textAlign="center"
                className="font-head"
                style={{ "text-shadow": "2px 2px 2px rgba(0,0,0,0.6)" }}
              >
                Find love near your location
            </Heading>
            </Box>
          </Box>
          <Box
            background="white"
            height="10vh"
            width="100vw"
            direction="row"
            justify="end"
            animation={[
              { type: "fadeIn", delay: 500, duration: 1000 },
              { type: "slideUp", delay: 500, duration: 1000 },
            ]}
          >
            <Box
              align="center"
              height="100%"
              width="25vw"
              justify="center"
              background="#82C5CD"
              animation={[
                { type: "fadeIn", delay: 1500, duration: 1000 },
                { type: "slideLeft", delay: 1500, duration: 3000 },
              ]}
            >
              <Stack fill="true" anchor="center" interactiveChild="first">
                <Button
                  fill="true"
                  primary
                  focusIndicator="false"
                  style={{ "border-radius": "0" }}
                  href="/home"
                />
                <FormNext size="large" />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="2" dy="2" result="offsetblur" />
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
