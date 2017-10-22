import {
    ADD_TO_CART,
    CHECKOUT,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    LOAD_CART
} from './home.actions';

const initialState = {
    cart: {} 
};

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
            };
        case ADD_TO_CART:
            const newCart = Object.values(state.cart).reduce((prev, prod) => {
                prev[prod.name] = prod
                return prev;
            }, {});
            newCart[action.name] = { 
                        name: action.name, 
                        price: action.price, 
                        image: action.image, 
                        desc: action.desc 
                    }
            return {
                ...state,
                cart: newCart
            };
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                checkoutCart: state.cart,
                checkoutStatus: true
            };
        case CHECKOUT_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;