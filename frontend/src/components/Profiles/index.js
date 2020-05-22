import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
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
} from "grommet";
import theme from "../Theme";
import CREATE_MESSAGE_MUTATION from "../../queries/messages/createMessage";
import DELETE_MESSAGE_MUTATION from "../../queries/messages/deleteMessage";
import MESSAGES_QUERY from "../../queries/messages/messages";

const charLimit = (string) => {
  const limit = 20;
  if (string.length > limit) {
    return `${string.substring(0, limit)}...`;
  } else {
    return string;
  }
};

const ProfileCard = (props) => {
  const chat = props.chat;

  const [showChatBox, setShowChatBox] = useState(false);
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);

  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myUser = myInfo.username;
  const myID = myInfo.id;

  // the function that sends the new message to the backend
  const [sendMessage] = useMutation(CREATE_MESSAGE_MUTATION, {
    variables: {
      content: value,
      sender: myID,
      receiver: chat.id,
    },
    refetchQueries: [{ query: MESSAGES_QUERY }],
  });

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
              src={process.env.REACT_APP_BACK_END_URL + chat.profile_photo.url}
            ></Avatar>
            <Box overflow="hidden" justify="start" align="start">
              <Text color="black" size="medium">
                {charLimit(chat.name)}
              </Text>
              <Text color="black" size="small">
                Current score:
                {charLimit(chat.score)}
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
                justify="center"
              >
                <Button
                  plain
                  icon={<FormPrevious size="medium" />}
                  onClick={() => setShowChatBox(false)}
                />
                <Box
                  height="100%"
                  width="80vw"
                  align="center"
                  justify="center"
                  pad={{ horizontal: "5vw" }}
                ></Box>
              </Box>

              {/* main profile area */}
              <Box height="80vh" width="100%" background="white">
                <Box
                  height="50%"
                  width="100vw"
                  elevation="small"
                  overflow="hidden"
                >
                  <Image
                    fit="cover"
                    src={process.env.REACT_APP_BACK_END_URL + chat.profile_photo.url}
                  />
                </Box>
                <Box height="50%" width="100%" pad="large" gap="medium">
                  <Text color="black" size="large">
                    {chat.name}
                  </Text>
                  <Text color="black" size="medium">
                    <Trophy /> {chat.score}
                  </Text>
                  <Text color="black" size="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Box direction="row" gap="medium">
                    <Bar size="large" />
                    <Gamepad size="large" />
                    <Code size="large" />
                  </Box>
                </Box>
              </Box>

              {/* bottom text input */}
              <Form>
                <Box
                  width="100vw"
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
                    type="submit"
                    icon={<Send size="medium" />}
                    margin={{ left: "small" }}
                    onClick={() => {
                      if (value !== "") {
                        sendMessage();
                        setValue("");
                      }
                    }}
                  />
                </Box>
              </Form>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default ProfileCard;
