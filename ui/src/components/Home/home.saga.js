import { takeLatest, put, call } from 'redux-saga/effects';
import {
    CHECKOUT,
    checkoutSuccess,
    checkoutFailure
} from './home.actions';

function handleCheckout() {
    //web3 things
}


function* checkout(action) {
    try {
        console.log(action);
        const response = yield call(handleCheckout);
        yield put(checkoutSuccess(response));
    }
    catch (err) {
        yield put(checkoutFailure(err));
    }
}

export default function* watchCheckout() {
    yield takeLatest(CHECKOUT, checkout);
}