import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  TextInput,
  Avatar,
  List,
  Text,
  Image,
  Stack,
  Form,
  FormField,
  Meter,
} from "grommet";
import theme from "../../components/Theme";
import "../../tailwind.generated.css";
import {
  FormPrevious,
  FormClose,
  FormNext,
  Send,
  Clock,
  Update,
  Code,
  Gamepad,
  Bar,
  Trophy,
} from "grommet-icons";
import Header from "../../components/Header";
import AppBar from "../../components/AppBar";
import axios from "axios";

const nameCompatabilityAPI = (name, lname) => {
  /* my original API happen to die to I'm just faking it */
  let lovdata = Math.random() * 100;
  lovdata = Math.floor(lovdata);
  return lovdata;
};

const Games = () => {
  const [showFortune, setShowFortune] = useState(false);
  const [showHoroscope, setShowHoroscope] = useState(false);
  const [horoscope, setHoroscope] = useState("");
  const [showFortuneNoti, setShowFortuneNoti] = useState(false);
  const [showNameComp, setShowNameComp] = useState(false);
  const [showCompPercent, setShowCompPercent] = useState(false);
  const [showCompNoti, setShowCompNoti] = useState(false);
  const [compPercent, setCompPercent] = useState(20);

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
          <Box height="100%" width="100%" align="center" justify="around">
            <Heading>Mini Games</Heading>
            <Box width="100%" height="50%" direction="row" justify="around">
              {/* fortune cookie game card */}
              <Box
                width="40%"
                height="60%"
                background="white"
                round="large"
                elevation="medium"
                overflow="hidden"
                align="center"
                justify="start"
                onClick={() => setShowFortune(!showFortune)}
              >
                <Box
                  width="100%"
                  height="60%"
                  background="#FC7753"
                  align="center"
                  justify="center"
                >
                  <Box
                    round="full"
                    background="white"
                    width="80px"
                    height="80px"
                    align="center"
                    justify="center"
                  >
                    <Box
                      round="full"
                      background="white"
                      width="45px"
                      height="45px"
                      align="center"
                      justify="center"
                    >
                      <Image
                        src={window.location.origin + "/fortune-cookie.png"}
                      />
                    </Box>
                  </Box>
                </Box>
                <Text textAlign="center" margin="small">
                  Love Horoscope
              </Text>
              </Box>

              {/* Name Compatability game card */}
              <Box
                width="40%"
                height="60%"
                background="white"
                round="large"
                elevation="medium"
                overflow="hidden"
                align="center"
                justify="start"
                onClick={() => setShowNameComp(!showNameComp)}
              >
                <Box
                  width="100%"
                  height="60%"
                  background="#82C5CD"
                  align="center"
                  justify="center"
                >
                  <Box
                    round="full"
                    background="white"
                    width="80px"
                    height="80px"
                    align="center"
                    justify="center"
                  >
                    <Box
                      round="full"
                      background="white"
                      width="45px"
                      height="45px"
                      align="center"
                      justify="center"
                    >
                      <Image src={window.location.origin + "/blue-heart.png"} />
                    </Box>
                  </Box>
                </Box>
                <Text textAlign="center" margin="small">
                  Name Compatibility
              </Text>
              </Box>
            </Box>
          </Box>

          {/* Fortune cookie overlay */}
          {showFortune && (
            <Layer
              modal
              plain
              onEsc={() => setShowFortune(!showFortune)}
              onClickOutside={() => setShowFortune(!showFortune)}
            >
              <Box
                fill
                background="white"
                align="center"
                justify="center"
                open={showFortune}
              >
                <Box
                  fill
                  align="center"
                  justify="center"
                  background="linear-gradient(135deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)"
                >
                  {/* header of box */}
                  <Box
                    width="100%"
                    height="10vh"
                    elevation="small"
                    direction="row"
                    align="center"
                    background="light-3"
                    justify="center"
                  >
                    <Button
                      plain
                      icon={<FormPrevious size="medium" />}
                      onClick={() => setShowFortune(false)}
                    />
                    <Box
                      height="100%"
                      width="80vw"
                      align="center"
                      justify="center"
                      pad={{ horizontal: "5vw" }}
                    ></Box>
                  </Box>

                  <Box
                    height="90vh"
                    width="100%"
                    align="center"
                    gap="medium"
                    pad="medium"
                  >
                    <Heading level="2">Welcome to Love Horoscope</Heading>
                    <Heading level="3">Choose a cookie</Heading>
                    <Box direction="row" margin={{ top: "30vh" }}>
                      <Button
                        plain
                        icon={
                          <Box animation="jiggle">
                            <Image
                              fit="contain"
                              src={window.location.origin + "/fortune-cookie.png"}
                            />
                          </Box>
                        }
                        onClick={() => {
                          setHoroscope(
                            "A romantic interest who was once impervious to your magic might not be able to resist your charms today. "
                          );
                          setShowHoroscope(true);
                          setShowFortuneNoti(true);
                        }}
                      ></Button>
                      <Button
                        plain
                        icon={
                          <Box animation="jiggle">
                            <Image
                              fit="contain"
                              src={window.location.origin + "/fortune-cookie.png"}
                            />
                          </Box>
                        }
                        onClick={() => {
                          setHoroscope(
                            "If doing what you love has made you feel selfish lately, on this day you won't mind focusing on your own needs and desires one bit."
                          );
                          setShowHoroscope(true);
                          setShowFortuneNoti(true);
                        }}
                      ></Button>
                      <Button
                        plain
                        icon={
                          <Box animation="jiggle">
                            <Image
                              fit="contain"
                              src={window.location.origin + "/fortune-cookie.png"}
                            />
                          </Box>
                        }
                        onClick={() => {
                          setHoroscope(
                            "If you've been unsure whether to advance a special love relationship, you'll now have a clearer understanding of what drives your heart, and you're willing to make a bigger promise to someone you love."
                          );
                          setShowHoroscope(true);
                          setShowFortuneNoti(true);
                        }}
                      ></Button>
                      <Button
                        plain
                        icon={
                          <Box animation="jiggle">
                            <Image
                              fit="contain"
                              src={window.location.origin + "/fortune-cookie.png"}
                            />
                          </Box>
                        }
                        onClick={() => {
                          setHoroscope(
                            "Get to know someone you love better by being curious about their upbringing, their past adventures, or their cultural background right now."
                          );
                          setShowHoroscope(true);
                          setShowFortuneNoti(true);
                        }}
                      ></Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {showFortuneNoti && (
                <Layer
                  position="bottom"
                  modal={false}
                  margin={{ vertical: "medium", horizontal: "small" }}
                  onEsc={() => {
                    setShowFortuneNoti(false);
                  }}
                  responsive={false}
                  plain
                >
                  <Box
                    align="center"
                    direction="row"
                    gap="small"
                    justify="between"
                    round="medium"
                    elevation="medium"
                    pad={{ vertical: "small", horizontal: "medium" }}
                    background="status-ok"
                    width="80vw"
                  >
                    <Box align="center" direction="row" gap="medium">
                      <Trophy />
                      <Text>
                        Thanks for playing Love Horoscope! In the future you'll
                        able to score points by playing daily.
                    </Text>
                    </Box>
                    <Button
                      icon={<FormClose />}
                      onClick={() => {
                        setShowFortuneNoti(false);
                      }}
                      plain
                    />
                  </Box>
                </Layer>
              )}
              {showHoroscope && (
                <Layer
                  modal
                  plain
                  onEsc={() => setShowHoroscope(false)}
                  onClickOutside={() => setShowHoroscope(false)}
                >
                  <Box fill background="white" align="center" justify="center">
                    <Box
                      width="100%"
                      height="10vh"
                      elevation="small"
                      direction="row"
                      align="center"
                      background="light-3"
                      justify="center"
                    >
                      <Button
                        plain
                        icon={<FormPrevious size="medium" />}
                        onClick={() => setShowHoroscope(false)}
                      />
                      <Box
                        height="100%"
                        width="80vw"
                        align="center"
                        justify="center"
                        pad={{ horizontal: "5vw" }}
                      ></Box>
                    </Box>

                    <Box
                      height="90vh"
                      width="80%"
                      align="center"
                      justify="center"
                    >
                      <Text>{horoscope}</Text>
                    </Box>
                  </Box>
                </Layer>
              )}
            </Layer>
          )}

          {/* name compatability overlay */}
          {showNameComp && (
            <Layer
              modal
              plain
              onEsc={() => setShowNameComp(false)}
              onClickOutside={() => setShowNameComp(false)}
            >
              <Box fill background="white" align="center" justify="center">
                <Box
                  fill
                  align="center"
                  justify="center"
                  background="linear-gradient(135deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)"
                >
                  {/* header of box */}
                  <Box
                    width="100%"
                    height="10vh"
                    elevation="small"
                    direction="row"
                    align="center"
                    background="light-3"
                    justify="center"
                  >
                    <Button
                      plain
                      icon={<FormPrevious size="medium" />}
                      onClick={() => setShowNameComp(false)}
                    />
                    <Box
                      height="100%"
                      width="80vw"
                      align="center"
                      justify="center"
                      pad={{ horizontal: "5vw" }}
                    ></Box>
                  </Box>

                  <Box
                    height="90vh"
                    width="100%"
                    align="center"
                    gap="medium"
                    pad="medium"
                  >
                    <Heading textAlign="center" level="2">
                      Welcome to Name Compatability
                  </Heading>
                    <Heading level="3">Type in the names</Heading>
                    <Box direction="row" margin={{ top: "10vh" }}>
                      <Form
                        onSubmit={({ value }) => {
                          console.log(value);
                          if (value.name1 !== "" && value.name2 !== "") {
                            const percent = nameCompatabilityAPI(
                              value.name1,
                              value.name2
                            );
                            setCompPercent(Number(percent));
                            setShowCompPercent(true);
                            setShowCompNoti(true);
                          } else {
                            alert("Please enter both names");
                          }
                        }}
                      >
                        <FormField
                          name="name1"
                          htmlfor="textinput-id"
                          label="Name one"
                        >
                          <TextInput id="textinput-1" name="name1" />
                        </FormField>
                        <FormField
                          name="name2"
                          htmlfor="textinput-id"
                          label="Name two"
                        >
                          <TextInput id="textinput-2" name="name2" />
                        </FormField>
                        <Box direction="row" gap="medium">
                          <Button type="submit" primary label="Submit" />
                          <Button type="reset" label="Reset" />
                        </Box>
                      </Form>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {showCompNoti && (
                <Layer
                  position="bottom"
                  modal={false}
                  margin={{ vertical: "medium", horizontal: "small" }}
                  onEsc={() => {
                    setShowCompNoti(false);
                  }}
                  responsive={false}
                  plain
                >
                  <Box
                    align="center"
                    direction="row"
                    gap="small"
                    justify="between"
                    round="medium"
                    elevation="medium"
                    pad={{ vertical: "small", horizontal: "medium" }}
                    background="status-ok"
                    width="80vw"
                  >
                    <Box align="center" direction="row" gap="medium">
                      <Trophy />
                      <Text>
                        Thanks for playing Name Compatability! In the future
                        you'll score points by playing daily.
                    </Text>
                    </Box>
                    <Button
                      icon={<FormClose />}
                      onClick={() => {
                        setShowCompNoti(false);
                      }}
                      plain
                    />
                  </Box>
                </Layer>
              )}
              {showCompPercent && (
                <Layer
                  modal
                  plain
                  onEsc={() => setShowCompPercent(false)}
                  onClickOutside={() => setShowCompPercent(false)}
                >
                  <Box fill background="white" align="center" justify="center">
                    <Box
                      width="100%"
                      height="10vh"
                      elevation="small"
                      direction="row"
                      align="center"
                      background="light-3"
                      justify="center"
                    >
                      <Button
                        plain
                        icon={<FormPrevious size="medium" />}
                        onClick={() => setShowCompPercent(false)}
                      />
                      <Box
                        height="100%"
                        width="80vw"
                        align="center"
                        justify="center"
                        pad={{ horizontal: "5vw" }}
                      ></Box>
                    </Box>

                    <Box
                      height="90vh"
                      width="80%"
                      align="center"
                      justify="center"
                    >
                      <Stack anchor="center">
                        <Meter
                          type="circle"
                          background="light-2"
                          values={[
                            {
                              value: compPercent,
                              color: compPercent > 50 ? "accent-2" : "accent-1",
                            },
                          ]}
                        />
                        <Box align="center">
                          <Text size="large">{compPercent + "%"}</Text>
                          <Text size="large">
                            {compPercent > 50 ? "Possible" : "Not the one"}
                          </Text>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Layer>
              )}
            </Layer>
          )}

          <AppBar />
        </Box>
      </Box>
    </Grommet>
  );
};

export default Games;
