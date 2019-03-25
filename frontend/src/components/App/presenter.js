import React from "react";
import { Route, Switch } from "react-router-dom";
import PropsType from "prop-types";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";
import Navigation from "components/Navigation";
import Feed from "components/Feed";
import Explore from "components/Explore";
import Search from "components/Search";

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoute key={2} /> : <PublicRoute key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropsType.bool.isRequired
};

const PrivateRoute = props => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/search/:term" component={Search} />
  </Switch>
);

const PublicRoute = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="forget" render={() => "password"} />
  </Switch>
);

export default App;
