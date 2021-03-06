import './CartItem.css'
import { Link } from 'react-router-dom'
const CartItem = ({ item, qtyChangeHandler, removeHandler, isOrderScreen }) => {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                {/* 이미지 넣으면 이거 */}
                {/* <img src={item.imageUrl} alt={item.name}></img> */}
                <img src="http://placehold.it/100x100?text=sample" alt={item.name}></img>
            </div>

            <Link to={`/product/${item.product}`} className="cartitem_name">
                <p>{item.name}</p>
            </Link>

            <p className="cartitem_price">{item.price}원</p>

            <select className="cartitem_select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option>{item.qty}</option>
                ))}
            </select>
            { !isOrderScreen && <button className="cartitem_deleteBtn" onClick={() => removeHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button> }
            { isOrderScreen && <i className = "fa fa-shopping-bag"></i> }
        </div>
    )
}

export default CartItem;
