import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
import { Login, Register } from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
