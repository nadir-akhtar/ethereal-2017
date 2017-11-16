import { takeLatest, put, call } from 'redux-saga/effects';
import {
    CHECKOUT,
    checkoutSuccess,
    checkoutFailure
} from './home.actions';

import getWeb3 from './getWeb3';
import contractData from '../../contractData';

function handleCheckout(cart) {

    //web3 things
    return getWeb3
    .then(function (res) {
        console.log(res.web3Instance.eth.accounts);
        return {marketPlace: res.web3Instance.eth.contract(contractData.Marketplace.abi), web3: res.web3Instance}
    })
    .then(function(abi) {
        abi.marketPlace = abi.marketPlace.at(contractData.Marketplace.address);
        return abi;
    })
    .then(function(contract) {
        Object.values(cart).forEach((product) => {
            return contract.marketPlace.buyItem.sendTransaction(product.name, {from: contract.web3.eth.accounts[0]}, function(error, result) {
                if (error) {
                    alert(error);
                }
                else {
                    alert("Successfully purchased " + product.name + "\nView Transaction at " + result)
                }
            });
        });
        return true;
    })
    .catch((error) => {
        console.error(error);
        return false;
    })
}

function* checkout(action) {
    try {
        const response = yield call(handleCheckout, action.cart);
        console.log(response);
        yield put(checkoutSuccess(response));
    }
    catch (err) {
        yield put(checkoutFailure(err));
    }
}

export default function* watchCheckout() {
    yield takeLatest(CHECKOUT, checkout);
}