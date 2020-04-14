import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route/>
        </Switch>
      </Provider>
    );  
  };
};
