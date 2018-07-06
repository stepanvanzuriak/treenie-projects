import axios from 'axios'
import {
  OPEN_BOOK_PAGE,
  OPEN_BOOKS_LIST_PAGE,
  SET_BOOKS,
  SET_BOOKS_COUNT,
  SET_BOOK,
  CLEAR_BOOKS
} from './actionTypes'

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

const setBook = book => ({ type: SET_BOOK, currentBook: book })

export const getBook = id => {
  return dispatch =>
    axios
      .get(`https://fakerestapi.azurewebsites.net/api/Books/${id}`)
      .then(res => dispatch(setBook(res.data)))
      .catch(error => console.error(error))
}

export const getBooks = (startId = 0, size = 5) => {
  // FIXME: CHANGE TO ARRAY OF REQ
  /*
  
   yield all(
      new Array(booksListSize)
        .fill(0)
        .map((_, index) =>
          bookApi(index + 1 + booksListSize * (booksListPage - 1))
        )
    )
  */
  return dispatch =>
    axios
      .get('https://fakerestapi.azurewebsites.net/api/Books')
      .then(res => {
        const booksPagesCount = res.data.length
        const books = res.data.filter(
          (element, index) => index > startId && index < startId + size
        )

        dispatch(setBooksPageCount(booksPagesCount))
        dispatch(setBooks(books, startId, startId / size))
      })
      .catch(error => console.error(error))
}
