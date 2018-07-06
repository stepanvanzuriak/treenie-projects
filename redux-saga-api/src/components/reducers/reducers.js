import {
  SET_BOOKS,
  OPEN_BOOK,
  SET_BOOK,
  OPEN_MAIN_PAGE,
  PREV_MAIN_PAGE,
  NEXT_MAIN_PAGE
} from '../actions/actionTypes'

const initState = {
  booksListPage: 1,
  booksListSize: 4,
  booksPagesCount: 30,
  books: [],
  selectedBook: null,
  currentPage: 'MainPage'
}

export const bookShop = (state = initState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.books }
    case SET_BOOK:
      return { ...state, selectedBook: action.selectedBook }
    case OPEN_BOOK:
      return { ...state, currentPage: 'BookPage' }
    case OPEN_MAIN_PAGE:
      return { ...state, selectedBook: null, currentPage: 'MainPage' }
    case PREV_MAIN_PAGE:
      return { ...state, booksListPage: state.booksListPage - 1, books: [] }
    case NEXT_MAIN_PAGE:
      return { ...state, booksListPage: state.booksListPage + 1, books: [] }
    default:
      return state
  }
}
