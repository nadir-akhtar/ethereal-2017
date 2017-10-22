import { takeLatest, put, call } from 'redux-saga/effects';
import {
  SELL_DATA,
  sellDataSuccess,
  sellDataFailure
} from './sellData.actions';
//import { API_URL} from '../../environment';

function sellData(sd, data) {

  const depth = 4;
  const minWeightMagnitude = 15;

  console.log("9");

// Send trytes
//   iota.api.sendTrytes(mam.trytes, depth, minWeightMagnitude, (err, tx) => {
//     if (err) {
//       throw err;
//     }
//     else {
//       console.log(tx);
//       return tx;
//     }
//   });

}


function* submitSellData(action) {
  try {
    console.log("SEED", action.seed);
    console.log("DATA", action.data);
    const response = yield call(sellData, action.seed, action.data);
    yield put(sellDataSuccess(response));
  }
  catch(err)
  {
    yield put(sellDataFailure(err));
  }
}

export default function* watchSellDataSubmit() {
  yield takeLatest(SELL_DATA, submitSellData);
}