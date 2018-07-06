import { SET_BOOKS, NEXT_PAGE, PREV_PAGE } from '../actions/actionTypes'

const initState = {
  books: [],
  currentPage: 0,
  pageSize: 6,
  pageCount: 30
}

export const bookShop = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      const { books } = payload
      return { ...state, books }
    case NEXT_PAGE:
      return { ...state, books: [], currentPage: state.currentPage + 1 }
    case PREV_PAGE:
      return { ...state, books: [], currentPage: state.currentPage - 1 }
    default:
      return state
  }
}
