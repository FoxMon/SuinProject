import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (productId, qty) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post(
            "/api/v1/items/cart", {
                id : productId,
            }
        );
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                product: data.id,
                name: data.name,
                imageUrl: data.imageUrl,
                price: data.price,
                stockQuantity: data.stockQuantity,
                qty
            }
        })
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    } catch(err) {
        console.log(err);
    }

    const getMemberId = async () => {

        await axios.get(
            "/api/v1/members/id"
        ).then(function(response) {
            console.log("response data = ", response.data);
            axios.post(
                "/api/v1/order/cart", {
                    itemId : productId,
                    count : qty,
                    memberId : response.data,
                    memberName : localStorage.getItem("userName"),
                }
            );
            console.log("성공")
        }).catch(function(err) {
            console.log(err);
        });
    }

    getMemberId();
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}