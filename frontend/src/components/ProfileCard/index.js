import React from "react";
import { Link } from "react-router-dom";

const Profile_Card = ({ profile }) => {
  return (
    <div className="uk-card uk-card-muted">
      <div className="uk-card-media-top"></div>
      <div className="uk-card-body">
        <p id="name" className="uk-text-uppercase">
          {profile.username}
        </p>
      </div>
    </div>
  );
};

export default Profile_Card;
