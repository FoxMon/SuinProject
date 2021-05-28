import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    const onClickLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <Link to="/">
                <div className="navbar_logo">
                    <h2>SUIN <br/> PHARMACY</h2>
                </div>
            </Link>
            {/* links */}
            <ul className="navbar_links">
            {localStorage.getItem("signIn") && (
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>cart
                            <span className="cartlogo_badge">{cartItems.length}</span>
                        </span>
                    </Link>
                </li>)}
                <li>
                    <Link to="/home">Shop</Link>
                </li>
                {!localStorage.getItem("signIn") && (
                <li>
                    <Link to = "/signin">Sign In</Link>
                </li>)}
                {!localStorage.getItem("signIn") && (
                <li>
                    <Link to = "/signup">Sign Up</Link>
                </li>)}
                {localStorage.getItem("signIn") && (
                <li>
                    <button className = "logout_btn" type = "submit" onClick = {onClickLogout}>Logout</button>
                </li>)}
            </ul>
            {/* hamburger menu */}
            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
