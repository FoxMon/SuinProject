import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScrren from './screens/SignInScreen';
import OrderScreen from './screens/OrderScreen';
import MainScreen from './screens/MainScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';

function App() {

  const [sideToggle, setSideTogle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideTogle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideTogle(false)} />
      <Backdrop show={sideToggle} click={() => setSideTogle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/signin" component={SignInScrren} />
          <Route exact path="/signup" component={SignUpScreen} />
          <Route exact path="/order" component={OrderScreen} />
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;