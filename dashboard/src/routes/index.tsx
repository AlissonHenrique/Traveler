import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cities from '../pages/Cities';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/cities" exact component={Cities} />
  </Switch>
);

export default Routes;
