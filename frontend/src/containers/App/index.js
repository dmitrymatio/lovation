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
/* import { Fonts, GlobalStyle } from "buffetjs"; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "../../utils/apolloClient";
import { FormClose, Notification } from "grommet-icons";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from "grommet";

// Components
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import AuthPage from "../AuthPage";
import ConnectPage from "../ConnectPage";
import Profiles from "../Profiles";

/* import HomePage from "../HomePage";
import NotFound from "../NotFound"; */

// This component is HoC that prevents the user from accessing a route if he's not logged in
import ProtectedRoute from "../ProtectedRoute";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} themeMode="dark">
      {" "}
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            {/*         <Fonts />
        <GlobalStyle /> */}
            <Router>
              <ApolloProvider client={client}>
                <div>
                  <Box fill>
                    <AppBar>
                      {" "}
                      <Heading level="3" margin="none">
                        My App
                      </Heading>
                      <Button
                        icon={<Notification />}
                        onClick={() => setShowSidebar(!showSidebar)}
                      />
                    </AppBar>
                    <Box
                      direction="row"
                      flex
                      overflow={{ horizontal: "hidden" }}
                    >
                      <Box flex align="center" justify="center">
                        app body
                      </Box>
                      {!showSidebar || size !== "small" ? (
                        <Collapsible direction="horizontal" open={showSidebar}>
                          <Box
                            flex
                            width="medium"
                            background="light-2"
                            elevation="small"
                            align="center"
                            justify="center"
                          >
                            sidebar
                          </Box>
                        </Collapsible>
                      ) : (
                        <Layer>
                          <Box
                            background="light-2"
                            tag="header"
                            justify="end"
                            align="center"
                            direction="row"
                          >
                            <Button
                              icon={<FormClose />}
                              onClick={() => setShowSidebar(false)}
                            />
                          </Box>
                          <Box
                            fill
                            background="light-2"
                            align="center"
                            justify="center"
                          >
                            sidebar
                          </Box>
                        </Layer>
                      )}
                    </Box>
                  </Box>
                  <Nav />
                  <Switch>
                    {/* A user can't go to the Articles pages if not authenticated */}
                    <Route
                      exact
                      path="/auth/:authType/:id?"
                      component={AuthPage}
                    />
                    <Route
                      exact
                      path="/connect/:provider"
                      component={ConnectPage}
                    />
                    <ProtectedRoute path="/" component={Articles} exact />
                    <ProtectedRoute
                      path="/article/:id"
                      component={Article}
                      exact
                    />
                    <ProtectedRoute
                      path="/category/:id"
                      component={Category}
                      exact
                    />
                    <ProtectedRoute
                      path="/profiles"
                      component={Profiles}
                      exact
                    />

                    {/*                 <Route path="" component={NotFound} />*/}
                  </Switch>
                </div>
              </ApolloProvider>
            </Router>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default memo(App);
