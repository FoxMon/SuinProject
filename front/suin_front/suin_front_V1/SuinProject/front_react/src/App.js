import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Switch, Router} from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Index from "./components/Index";
import Item from "./components/Item";
import List from "./components/List";
import Basket from "./components/Basket";
import Users from './components/Users';

const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <Route exact path = "/" component = {SignUp}/>
        <Route exact path = "/signin" component = {SignIn}/>
        <Route exact path = "/index" component = {Index}/>
      </BrowserRouter>
    </div>
  );
}

export default App;