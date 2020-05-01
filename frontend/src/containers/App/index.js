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
import React, { memo } from "react";
import { Fonts, GlobalStyle } from "buffetjs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "../../utils/apolloClient";


// Components
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import AuthPage from "../AuthPage";
import ConnectPage from "../ConnectPage";
/* import HomePage from "../HomePage";
import NotFound from "../NotFound"; */

// This component is HoC that prevents the user from accessing a route if he's not logged in
import ProtectedRoute from "../ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <>
        <Fonts />
        <GlobalStyle />
        <Router>
          <ApolloProvider client={client}>
            <div>
              <Nav />
              <Switch>
                {/* A user can't go to the Articles pages if not authenticated */}
                <Route exact path="/auth/:authType/:id?" component={AuthPage} />
                <Route
                  exact
                  path="/connect/:provider"
                  component={ConnectPage}
                />
                <ProtectedRoute path="/" component={Articles} exact />
                <ProtectedRoute path="/article/:id" component={Article} exact />
                <ProtectedRoute
                  path="/category/:id"
                  component={Category}
                  exact
                />
                {/*                 <Route path="" component={NotFound} />*/}
              </Switch>
            </div>
          </ApolloProvider>
        </Router>
      </>
    </div>
  );
};

export default memo(App);
