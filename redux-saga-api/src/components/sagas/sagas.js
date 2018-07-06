import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import axios from 'axios'
import moment from 'moment'
import {
  SET_BOOK,
  GET_BOOK,
  SET_BOOKS,
  GET_BOOKS
} from '../actions/actionTypes'

const bookApi = id =>
  axios.get('https://fakerestapi.azurewebsites.net/api/Books', {
    params: { ID: id }
  })

function* getBook({ id }) {
  try {
    const book = yield call(() => bookApi(id))

    yield put({
      type: SET_BOOK,
      selectedBook: {
        ...book.data,
        PublishDate: moment(book.data.PublishDate).format('L')
      }
    })
  } catch (error) {
    // TODO: REPLACE WITH SHOWING ERRORS
    console.log(error)
  }
}

function* getBooks() {
  const { booksListPage, booksListSize } = yield select(
    ({ booksListPage, booksListSize }) => ({ booksListPage, booksListSize })
  )
  try {
    const books = yield all(
      new Array(booksListSize)
        .fill(0)
        .map((_, index) =>
          bookApi(index + 1 + booksListSize * (booksListPage - 1))
        )
    )

    yield put({
      type: SET_BOOKS,
      books: books.map(book => ({
        ...book.data,
        PublishDate: moment(book.data.PublishDate).format('L'),
        Excerpt: `${book.data.Excerpt.substr(0, 50)}...`
      }))
    })
  } catch (error) {
    // TODO: REPLACE WITH SHOWING ERRORS
    console.log(error)
  }
}

export function* mainSaga() {
  yield takeEvery(GET_BOOK, getBook)
  yield takeEvery(GET_BOOKS, getBooks)
}
