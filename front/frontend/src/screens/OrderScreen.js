import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './OrderScreen.css';

//Components
import CartItem from '../components/CartItem'

// Action
import { removeFromCart } from '../redux/actions/cartAction'

const OrderScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    // const user = localStorage.getItem("signIn");
    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    }

    const { cartItems } = cart;

    const checkOutHandler = () => {
        window.location.replace('/paymenthome');
    }

    return (
        <div className="row">
            <div className="row-col">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="detail-col">
                                <h1>Billing Address</h1>
                                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Name"/>
                                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="email@example.com"/>
                                <label for="adr">Address</label>
                                <input type="text" id="adr" name="address" placeholder="Address"/>
                                {/* <label for="city">City</label>
                                <input type="text" id="city" name="city" placeholder="City"/> */}
                            </div>
                
                            <div className="detail-col">
                                <h2>Payment</h2>
                                <label for="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="Name"/>
                                <label for="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                <label for="expmonth">Expire Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="Date"/>
                
                                <div className="row">
                                    <div className="detail-col">
                                        <label for="expyear">ExpYear</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="0000"/>
                                    </div>
                                    <div className="detail-col">
                                        <label for="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* press submit -> back -> set order and delivery table -> axios post ok? */}
                        <Link to = "/paymenthome"><button type="submit" onClick = {checkOutHandler} class="btn">Continue to checkout</button></Link>
                    </form>
                </div>
            </div>
        
            <div className="bottom-col">
                <div className="container">
                    <h2><i className="fa fa-shopping-cart"></i>  Cart
                        <span className="price">
                        <h3>{getCartCount()} 개</h3>
                        </span>
                    </h2><hr/>
                    {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                    ) : cartItems.map(item => (<CartItem key={item.product} item={item} removeHandler={removeHandler}
                        isOrderScreen = {true} />))}
                    <hr/>
                    <h2>TOTAL :  <span className="price"><h3>{getCartSubTotal()}원</h3></span></h2>
                </div>
            </div>
        </div>
    );
}

export default OrderScreen;