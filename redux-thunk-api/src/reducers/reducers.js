import {
  SET_BOOK,
  OPEN_BOOK_PAGE,
  OPEN_BOOKS_LIST_PAGE,
  SET_BOOKS_COUNT,
  SET_BOOKS,
  CLEAR_BOOKS
} from '../actions/actionTypes'

const initialState = {
  books: [],
  booksListCurrentStartId: -1,
  booksListCurrentPage: 0,
  currentPage: 'BooksList',
  currentBook: null,
  booksCount: -1
}

export const booksApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        booksListCurrentStartId: action.startId,
        booksListCurrentPage: action.currentPage,
        books: action.books
      }
    case SET_BOOK:
      return {
        ...state,
        currentBook: action.currentBook
      }
    case OPEN_BOOK_PAGE:
      return {
        ...state,
        currentPage: 'BookPage'
      }
    case OPEN_BOOKS_LIST_PAGE:
      return {
        ...state,
        currentPage: 'BooksList',
        currentBook: null
      }
    case SET_BOOKS_COUNT:
      return {
        ...state,
        booksCount: action.booksCount
      }
    case CLEAR_BOOKS:
      return {
        ...state,
        books: []
      }
    default:
      return state
  }
}
