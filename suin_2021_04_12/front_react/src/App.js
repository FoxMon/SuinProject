import React from 'react';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Index from "./components/Index";
import Item from "./components/Item";
import List from "./components/List";
import Basket from "./components/Basket";

const App = () => {
  return (
    <div className="App">
      <Index></Index>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <Item></Item>
      <List></List>
      <Basket></Basket>
    </div>
  );
}

export default App;
