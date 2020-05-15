import React from "react";

const Chatbox = ({ message }) => {
  return (
    <>
      <h5>{message.sender.username}</h5>
      <p>{message.content}</p>
    </>
  );
};

export default Chatbox;
