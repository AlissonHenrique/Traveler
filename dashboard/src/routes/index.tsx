import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddProfileCity from '../pages/AddProfileCity';
import Cities from '../pages/Cities';
import ProfileCity from '../pages/ProfileCity';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/cities" exact component={Cities} />{' '}
    <Route path="/profilecity" exact component={ProfileCity} />
    <Route path="/addprofilecity" exact component={AddProfileCity} />
  </Switch>
);

export default Routes;
