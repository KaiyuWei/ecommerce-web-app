import React from "react";
import {Switch, Route} from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './Home';

const App=() => {
  return (
    <Switch>
      <Route exact path="/"  component = {Home} />
      <Route exact path="/login" component = {Login} />
      <Route exact path="/register" component= {Register} />
    </Switch>
  );
}

export default App;
