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

const charLimit = (string) => {
  const limit = 20;
  if (string.length > limit) {
    return `${string.substring(0, limit)}...`;
  } else {
    return string;
  }
};

const Chatbox = (props) => {
  const chat = props.chat;

  const [showChatBox, setShowChatBox] = useState(false);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);

  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myUser = myInfo.username;

  return (
    <Box
      height={{ min: "10vh", max: "10vh" }}
      width={{ min: "90vw" }}
      background="light-2"
      align="center"
      justify="around"
      direction="row"
      round="small"
      elevation="small"
    >
      <Button
        plain
        fill={true}
        label={
          <Box
            fill={true}
            align="center"
            justify="start"
            direction="row"
            gap="large"
            pad={{ horizontal: "large", vertical: "medium" }}
          >
            <Avatar
              border={{
                color: "border",
                size: "xsmall",
                style: "solid",
                side: "all",
              }}
              size="8vh"
              elevation="small"
              src={"http://localhost:1337" + chat.chat_with.profile_photo.url}
            ></Avatar>
            <Box overflow="hidden" justify="start" align="start">
              <Text color="black" size="medium">
                {charLimit(chat.chat_with.name)}
              </Text>
              <Text color="dark-4" size="xsmall">
                {charLimit(chat.messages[chat.messages.length - 1].content)}
              </Text>
            </Box>
          </Box>
        }
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
                  icon={<FormPrevious size="medium" />}
                  onClick={() => setShowChatBox(false)}
                />
                <Box height="100%" align="center" justify="center">
                  <Avatar
                    src={
                      "http://localhost:1337" + chat.chat_with.profile_photo.url
                    }
                  ></Avatar>
                  <Text color="black">{chat.chat_with.name}</Text>
                </Box>

                <Button
                  plain
                  icon={<BackTen size="medium" />}
                  onClick={() => {}}
                />
              </Box>

              {/* Main chat box history */}
              <Box width="100%" height="80vh" justify="end">
                <List
                  border={{ color: "none" }}
                  data={chat.messages}
                  primaryKey={(message) => {
                    const d = new Date(message.created_at);
                    if (message.sender.username == myUser) {
                      return (
                        <Box>
                          <Box
                            background="brand"
                            alignSelf="end"
                            style={{ "max-width": "75vw" }}
                            pad="medium"
                            round="small"
                            elevation="small"
                          >
                            <Text textAlign="start" color="black">
                              {message.content}
                            </Text>
                          </Box>
                          <Text alignSelf="end" size="small">
                            {d.toDateString()}
                          </Text>
                        </Box>
                      );
                    } else {
                      return (
                        <Box>
                          <Box
                            background="white"
                            alignSelf="start"
                            style={{ "max-width": "75vw" }}
                            pad="medium"
                            round="small"
                            elevation="small"
                          >
                            <Text textAlign="start" color="black">
                              {message.content}
                            </Text>
                          </Box>
                          <Text alignSelf="start" size="small">
                            {d.toDateString()}
                          </Text>
                        </Box>
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
                  icon={<Send size="medium" />}
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
    </Box>
  );
};

export default Chatbox;
