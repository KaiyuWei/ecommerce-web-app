import React, {useEffect} from "react";
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Home from './Pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './Pages/auth/RegisterComplete'
import ForgotPassword from "./Pages/auth/ForgotPassword";

import {auth} from './firebase'
import { useDispatch } from "react-redux";

const App=() => {
const dispatch = useDispatch();

// to check firebase auth state (whether a user is logged in)
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if(user) {
      // if user is signed in
      const idTokenResult = await user.getIdTokenResult();
      console.log("user", idTokenResult);
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
    }
  });
  // cleanup
  return () => unsubscribe();
}, []);

  return (
    <>
      <Header />
        <ToastContainer />
      <Switch>
        <Route exact path="/"  component = {Home} />
        <Route exact path="/login" component = {Login} />
        <Route exact path="/register" component= {Register} />
        <Route exact path="/register/complete" component= {RegisterComplete} />
        <Route exact path="/forgot/password" component= {ForgotPassword} />
      </Switch>
    </>
  );
};

export default App;
