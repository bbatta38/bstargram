import React from "react";
import { Route, Switch } from "react-router-dom";
import PropsType from "prop-types";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";

const App = props => [
    //nav,
    props.isLoggedIn ? <PrivateRoute key={2} /> : <PublicRoute key={2} />,
    <Footer key={3} />
]

App.propTypes = {
    isLoggedIn: PropsType.bool.isRequired
}

const PrivateRoute = props => (
    <Switch>
        <Route exact path="/" render={() => "feed"} />
        <Route exact path="/explore" render={() => "explore"} />
    </Switch>
)

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="forget" render={() => "password"} />
    </Switch>
)

export default App;
