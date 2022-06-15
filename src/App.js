import React from "react";
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Home from './Pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './Pages/auth/RegisterComplete'

const App=() => {
  return (
    <>
      <Header />
        <ToastContainer />
      <Switch>
        <Route exact path="/"  component = {Home} />
        <Route exact path="/login" component = {Login} />
        <Route exact path="/register" component= {Register} />
        <Route exact path="/register/complete" component= {RegisterComplete} />
      </Switch>
    </>
  );
};

export default App;
