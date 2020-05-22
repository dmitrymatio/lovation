/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React, { memo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "../../utils/apolloClient";

// Components
import LandingPage from "../LandingPage";
import AuthPage from "../AuthPage";
import ConnectPage from "../ConnectPage";
import Profiles from "../ProfilesPage";
import Home from "../HomePage";
import Messages from "../MessagesPage";
import Games from "../GamesPage";
import Leaderboard from "../Leaderboard";

/* import HomePage from "../HomePage";
import NotFound from "../NotFound"; */

// This component is HoC that prevents the user from accessing a route if he's not logged in
import ProtectedRoute from "../ProtectedRoute";

const App = () => {
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/" component={LandingPage} exact />

            <Route path="/auth/:authType/:id?" component={AuthPage} exact />

            <Route path="/connect/:provider" component={ConnectPage} exact />
            {/* A user can't go to the protected pages if not authenticated */}
            <ProtectedRoute path="/home" component={Home} exact />

            <ProtectedRoute path="/profiles" component={Profiles} exact />

            <ProtectedRoute path="/messages" component={Messages} exact />

            <ProtectedRoute path="/games" component={Games} exact />

            <ProtectedRoute path="/leaderboard" component={Leaderboard} exact />

          </Switch>
        </ApolloProvider>
      </Router>
    </>
  );
};

export default memo(App);
