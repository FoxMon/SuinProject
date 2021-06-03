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

//Payment
import Payment from './Payment';
import PaymentResult from './PaymentResult';
import Certification from './Certification';
import CertificationResult from './CertificationResult';
import paymentHome from './payment_page';

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
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/payment/result" component={PaymentResult} />
          <Route exact path="/certification" component={Certification} />
          <Route exact path="/certification/result" component={CertificationResult} />
          <Route exact path="/paymenthome" component={paymentHome} />
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;