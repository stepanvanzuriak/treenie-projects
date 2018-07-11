import { takeLatest } from 'redux-saga/effects';
import { REQUEST_BOOKS_ASYNC } from '../actions/actionTypes';
import { loadBooks } from './sagas';

function* mainSaga() {
  yield takeLatest(REQUEST_BOOKS_ASYNC, loadBooks);
}

export default mainSaga;
