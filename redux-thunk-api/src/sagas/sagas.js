import { put, call } from 'redux-saga/effects';
import { setBooksError, setBooks } from '../actions/actions';
import { books as getBooks } from '../api/books';
import { formatBook, chunks } from '../utils/utils';
/* eslint-disable import/prefer-default-export */
export function* loadBooks({ payload: { pageSize } }) {
  try {
    const books = yield call(() => getBooks());

    yield put(setBooks(chunks(books.data.map(formatBook), pageSize)));
  } catch (error) {
    yield put(setBooksError(':( Something bad happen. Try again later.'));
  }
}
/* eslint-enable */
