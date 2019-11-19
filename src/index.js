import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Login, Register } from "./components/auth";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import firebase from "./firebase";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);
