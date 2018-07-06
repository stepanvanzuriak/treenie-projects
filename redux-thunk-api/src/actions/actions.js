import axios from 'axios'
import {
  OPEN_BOOK_PAGE,
  OPEN_BOOKS_LIST_PAGE,
  SET_BOOKS,
  SET_BOOKS_COUNT,
  SET_BOOK,
  CLEAR_BOOKS
} from './actionTypes'

const bookApi = id =>
  axios.get('https://fakerestapi.azurewebsites.net/api/Books', {
    params: { ID: id }
  })

export const openBookPage = () => ({ type: OPEN_BOOK_PAGE })

export const openBooksListPage = () => ({ type: OPEN_BOOKS_LIST_PAGE })

const setBooks = (books, startId, currentPage) => ({
  type: SET_BOOKS,
  startId,
  books,
  currentPage
})

export const setBooksPageCount = booksCount => ({
  type: SET_BOOKS_COUNT,
  booksCount
})

export const clearBooks = () => ({ type: CLEAR_BOOKS })

/**
 * @return FluxStandardAction
 */
const setBook = book => ({ type: SET_BOOK, currentBook: book })

export const getBook = id => {
  return dispatch =>
    bookApi(id)
      .then(res => dispatch(setBook(res.data)))
      .catch(error => console.error(error))
}

export const getBooks = (startId = 0, size = 5) => {
  return dispatch =>
    axios
      .all(
        new Array(size).fill(0).map((_, index) => bookApi(index + 1 + startId))
      )
      .then(result => {
        const books = result.map(book => book.data)

        dispatch(setBooks(books, startId, startId / size))
      })
      .catch(error => console.error(error))
}
