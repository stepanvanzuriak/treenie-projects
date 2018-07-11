import { put, call } from 'redux-saga/effects'
import { setBooksError, setBooks } from '../actions/actions'
import { books } from '../api/books'
import { formatBook, chunks } from '../utils/utils'

export function* loadBooks({ payload: { pageSize } }) {
  try {
    const _books = yield call(() => books())

    yield put(setBooks(chunks(_books.data.map(formatBook), pageSize)))
  } catch (error) {
    yield put(setBooksError(':( Something bad happen. Try again later.'))
  }
}
