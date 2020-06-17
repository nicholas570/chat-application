import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Connexion from './components/Connexion';
import Chat from './components/Chat';
import Error from './components/Error';

function Routerz() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Connexion} />
        <Route path='/pseudo/:pseudo' component={Chat} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default Routerz;
