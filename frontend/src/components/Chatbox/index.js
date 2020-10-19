import React, { useState } from "react";
import { useMutation } from "react-apollo";
import {
  FormPrevious,
  FormClose,
  FormNext,
  Send,
  Clock,
  Update,
  Threats,
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

const Chatbox = (props) => {
  const chat = props.chat;

  const [showChatBox, setShowChatBox] = useState(false);
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);

  // this should be safe since there are no message id 0
  const [lastMessageID, setLastMessageID] = useState(0);

  const myInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const myUser = myInfo.username;
  const myID = myInfo.id;

  // the function that sends the new message to the backend
  const [sendMessage] = useMutation(CREATE_MESSAGE_MUTATION, {
    variables: {
      content: value,
      sender: myID,
      receiver: chat.chat_with.id,
    },
    onCompleted: (data) => {
      setLastMessageID(data.createMessage.message.id);
    },
    refetchQueries: [{ query: MESSAGES_QUERY }],
  });

  // the function that deletes a message
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION, {
    variables: {
      id: lastMessageID,
    },
    refetchQueries: [{ query: MESSAGES_QUERY }],
  });

  //chat bomb notification
  const [bombOpen, setBombOpen] = React.useState();
  const onOpen = () => setBombOpen(true);
  const onClose = () => setBombOpen(false);

  return (
    <Box
      height={{ min: "10vh", max: "10vh" }}
      width={{ min: "90%" }}
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
              src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
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
                justify="center"
              >
                <Button
                  plain
                  icon={<FormPrevious size="medium" />}
                  onClick={() => setShowChatBox(false)}
                />
                <Box
                  height="100%"
                  width="60vw"
                  align="center"
                  justify="center"
                  pad={{ horizontal: "5vw" }}
                >
                  <Avatar
                    border={{
                      color: "border",
                      size: "xsmall",
                      style: "solid",
                      side: "all",
                    }}
                    elevation="small"
                    src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                  />
                  <Text color="black">{chat.chat_with.name}</Text>
                </Box>

                <Button
                  plain
                  icon={
                    <Box animation="pulse">
                      <Threats size="medium" />
                    </Box>
                  }
                  onClick={() => {
                    let messageID;
                    if (value !== "") {
                      sendMessage();
                      setValue("");
                      onOpen();
                      setTimeout(deleteMessage, 10000);
                    } else {
                      alert("Please enter a message. It will disappear after 10 seconds.")
                    }
                  }}
                />
              </Box>
              {/* Main chat box history */}
              <Box
                width="100%"
                height="80vh"
                overflow={{ vertical: "scroll" }}
                margin={{ top: "1vh" }}
                style={{
                  transform: "rotateX(180deg)",
                  MozTransform: "rotateX(180deg)" /* Mozilla */,
                  WebkitTransform: "rotateX(180deg)" /* Safari and Chrome */,
                  msTransform: "rotateX(180deg)" /* IE 9+ */,
                  OTransform: "rotateX(180deg)" /* Opera */,
                }}
              >
                <List
                  border={{ color: "none" }}
                  data={chat.messages}
                  style={{
                    transform: "rotateX(180deg)",
                    MozTransform: "rotateX(180deg)" /* Mozilla */,
                    WebkitTransform: "rotateX(180deg)" /* Safari and Chrome */,
                    msTransform: "rotateX(180deg)" /* IE 9+ */,
                    OTransform: "rotateX(180deg)" /* Opera */,
                  }}
                  primaryKey={(message) => {
                    const d = new Date(message.created_at);
                    if (message.sender.username == myUser) {
                      return (
                        <Box>
                          <Box
                            background="brand"
                            alignSelf="end"
                            style={{ maxWidth: "75vw" }}
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

              {/* bomb timer notification */}
              {bombOpen && (
                <Layer
                  position="bottom"
                  modal={true}
                  margin={{ vertical: "medium", horizontal: "small" }}
                  onEsc={onClose}
                  onClickOutside={onClose}
                  responsive={false}
                  plain
                >
                  <Box
                    width="80vw"
                    align="center"
                    direction="row"
                    gap="medium"
                    justify="between"
                    round="small"
                    elevation="medium"
                    pad={{ vertical: "xsmall", horizontal: "small" }}
                    background="white"
                    border={{ color: "accent-1" }}
                  >
                    <Box align="center" direction="row" gap="xsmall">
                      <Clock size="large" />
                      <Text textAlign="start" color="black" size="small">
                        Thanks for bombing the chat! Your last message will
                        explode and disappear in 10 seconds
                      </Text>
                    </Box>
                    <Button icon={<FormClose />} onClick={onClose} plain />
                  </Box>
                </Layer>
              )}
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

export default Chatbox;
