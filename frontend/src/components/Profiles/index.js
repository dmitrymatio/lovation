import React from "react";
import Profile_Card from "../ProfileCard"

const Profiles_List = ({ profiles }) => {
  console.log(profiles);
  return (
    <div>
      <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
        {profiles.map((profile, i) => {
          return <Profile_Card profile={profile} key={`article__${profile.username}`} />;
        })}
      </div>
    </div>
  );
};

export default Profiles_List;
