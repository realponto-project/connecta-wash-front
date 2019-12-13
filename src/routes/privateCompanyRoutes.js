import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PagesRoute from "../pages";

class PrivateRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/company" component={PagesRoute} />
      </Switch>
    );
  }
}

export default PrivateRoutes;
