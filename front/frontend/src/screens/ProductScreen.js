import './ProductScreen.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartAction'

import axios from 'axios';

const ProductScreen = ({ match, history }) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    // useEffect(() => {
    //     if (product && match.params.id !== product.id) {
    //         dispatch(getProductDetails(match.params.id))
    //     }
    // }, [dispatch, product, match]); // -> 무한 렌더링

    useEffect(() => {
        if (product && match.params.id !== product.id) {
            dispatch(getProductDetails(match.params.id))
        } 
    }, []);

    const addToCartHandler = () => {
        dispatch(addToCart(product.id, qty));
        history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen_left">
                        <div className="left_image">
                            {/* 이미지 넣으면 이거 */}
                            {/* <img src={product.imageUrl} alt={product.name}></img> */}
                            <img src="http://placehold.it/320x320?text=sample" alt={product.name}></img>
                        </div>
                        <div className="left_info">
                            <p className="left_name">{product.name}</p>
                            <p>Price : {product.price}원</p>
                            {/* <p>Decription : {product.description}</p> */}
                            <p>Decription : {product.name}</p>
                        </div>
                    </div>
                    <div className="productscreen_right">
                        <div className="right_info">
                            <p>
                                Price : <span>{product.price}원</span>
                            </p>
                            <p>
                                Status : <span>{product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}</span>
                            </p>
                            <p>
                                Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.stockQuantity).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}> Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ProductScreen;
