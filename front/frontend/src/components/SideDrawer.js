import './SideDrawer.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideDrawer = ({ show, click }) => {

    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

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
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
                {localStorage.getItem("signIn") && (
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer_cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>)}
                <li>
                    <Link to = "/home">
                        <i class="fas fa-shopping-bag"></i>
                        <span>Shop</span>
                    </Link>
                </li>
                {localStorage.getItem("signIn") && (
                <li>
                    <Link to = "/member">
                        <i className="fas fa-user"></i>
                        <span>
                            User
                        </span>
                    </Link>
                </li>)}
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
                    <button id = "sidelogout" className = "side-logout_btn" type = "submit" onClick = {onClickLogout}>Logout</button>
                </li>)}
            </ul>
        </div>
    )
}

export default SideDrawer
