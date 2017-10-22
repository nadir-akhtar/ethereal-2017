export const ADD_TO_CART = "ADD_TO_CART";
export const CHECKOUT = "CHECKOUT";
export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_FAILURE = "CHECKOUT_FAILURE";
export const LOAD_CART = "LOAD_CART";

export const addToCart = function (name, price, image, desc) {
    return {
        type: ADD_TO_CART,
        name: name,
        price: price,
        image: image,
        desc: desc
    }
}

export const loadCart = function () {
    return {
        type: LOAD_CART
    }
}

export const checkout = function () {
    return {
        type: CHECKOUT
    }
}

export const checkoutSuccess = function () {
    return {
        type: CHECKOUT_SUCCESS
    }
}

export const checkoutFailure = function () {
    return {
        type: CHECKOUT_FAILURE
    }
}