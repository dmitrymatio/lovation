import React from "react";
import Profiles_List from "../../components/Profiles";
import Query from "../../components/Query";
import PROFILES_QUERY from "../../queries/profiles/profiles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h2>People near you</h2>
          <Query query={PROFILES_QUERY}>
            {({ data: { users  } }) => {
              return <Profiles_List profiles={users} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
