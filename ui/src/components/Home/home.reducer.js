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
                checkoutStatus: false
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.name]: { 
                        name: action.name, 
                        price: action.price, 
                        image: action.image, 
                        desc: action.desc 
                    }
                }
            };
        case CHECKOUT:
            return {
                ...state
            };
        case CHECKOUT_SUCCESS:
            console.log(action);
            return {
                ...initialState
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