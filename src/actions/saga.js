import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects';

import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';
import getPeople from '../api';

function* fetchData (action) {
  try {
    const data = yield getPeople();
    yield delay(1000);
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData);
}

export default function* rootSaga() {
  yield all([
    dataSaga(),
  ])
}
