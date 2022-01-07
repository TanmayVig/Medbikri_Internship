import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NotFound } from "../Components";
import Page1 from './Page1';
import Page2 from './Page2';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/launchpads" component={Page1} />
        <Route path="/launch/:id" exact component={Page2} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
