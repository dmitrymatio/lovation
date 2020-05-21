import React, { useState } from "react";
import { FormPrevious, FormNext, Send, BackTen } from "grommet-icons";
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
} from "grommet";
import theme from "../Theme";

const chat = {
  chat_with: "Jasmine Lam",
  messages: [
    {
      id: "1",
      content: "If you were a vegetable you'd be a cute-cumber",
      sender: {
        username: "dmitrymatio",
      },
      receiver: {
        username: "jasminelam",
      },
    },
    {
      id: "2",
      content: "Nice one",
      sender: {
        username: "jasminelam",
      },
      receiver: {
        username: "dmitrymatio",
      },
    },
    {
      id: "3",
      content: "You free this friday?",
      sender: {
        username: "dmitrymatio",
      },
      receiver: {
        username: "jasminelam",
      },
    },
    {
      id: "4",
      content: "I have a project presentation. Can we do sunday instead?",
      sender: {
        username: "jasminelam",
      },
      receiver: {
        username: "dmitrymatio",
      },
    },
    {
      id: "5",
      content: "Sure thing! Cya then",
      sender: {
        username: "dmitrymatio",
      },
      receiver: {
        username: "jasminelam",
      },
    },
  ],
};

const Chatbox = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);

  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myUser = myInfo.username;

  return (
    <>
      <Button
        direction="row"
        primary
        reverse
        color="light-2"
        label={
          <Box
            height="100%"
            width="100%"
            align="center"
            justify="around"
            direction="row"
          >
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"></Avatar>
            <Text color="black">{chat.chat_with}</Text>
          </Box>
        }
        style={{
          height: "10vh",
          width: "90vw",
          margin: "1vh 0",
          "border-radius": "5px",
          "box-shadow": "1px 1px 4px"
        }}
        onClick={() => setShowChatBox(!showChatBox)}
      />

      {/* Layer overlay shows up when button is pressed */}
      {showChatBox && (
        <Layer
          modal
          plain
          onEsc={() => setShowChatBox(!showChatBox)}
          onClickOutside={() => setShowChatBox(!showChatBox)}
        >
          <Box
            fill
            background="white"
            align="center"
            justify="center"
            open={showChatBox}
          >
            <Box
              fill
              align="center"
              justify="center"
              background="linear-gradient(135deg, rgba(247,172,112,0.5) 30%, rgba(130,197,205,0.5) 70%)"
            >
              {/* header of chatbox */}
              <Box
                width="100%"
                height="10vh"
                elevation="small"
                direction="row"
                align="center"
                background="light-3"
                justify="around"
              >
                <Button
                  plain
                  icon={<FormPrevious size="large" />}
                  onClick={() => setShowChatBox(false)}
                />
                <Box height="100%" align="center" justify="center">
                  <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"></Avatar>
                  <Text color="black">{chat.chat_with}</Text>
                </Box>

                <Button
                  plain
                  icon={<BackTen size="large" />}
                  onClick={() => {}}
                />
              </Box>

              {/* Main chat box history */}
              <Box width="100%" height="80vh">
                <List
                  border={{ color: "none" }}
                  data={chat.messages}
                  primaryKey={(message) => {
                    if (message.sender.username == myUser) {
                      return (
                        <Button
                          primary
                          color="neutral-3"
                          label={
                            <Text textAlign="start" color="white">
                              {message.content}
                            </Text>
                          }
                          alignSelf="end"
                          style={{ "max-width": "75vw" }}
                        ></Button>
                      );
                    } else {
                      return (
                        <Button
                          primary
                          color="dark-3"
                          label={
                            <Text textAlign="start" color="white">
                              {message.content}
                            </Text>
                          }
                          alignSelf="start"
                          style={{ "max-width": "75vw" }}
                        ></Button>
                      );
                    }
                  }}
                />
              </Box>

              {/* bottom text input */}
              <Box
                width="100%"
                height="10vh"
                direction="row"
                align="center"
                pad="large"
                elevation="small"
                background="light-3"
              >
                <TextInput value={value} reverse onChange={onChange} />
                <Button
                  plain
                  icon={<Send size="large" />}
                  margin={{ left: "small" }}
                  onClick={() => {
                    console.log("hello");
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default Chatbox;
