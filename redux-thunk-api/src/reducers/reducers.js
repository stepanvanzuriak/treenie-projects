import {
  SET_BOOKS,
  NEXT_PAGE,
  PREV_PAGE,
  ADD_ERROR
} from '../actions/actionTypes'

const initState = {
  books: [],
  loading: true,
  error: false,
  errors: [],
  currentPage: 0,
  pageSize: 6,
  pageCount: 32
}

export const bookShop = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      const { books } = payload
      return { ...state, books, loading: false, error: false, errors: [] }
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 }
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 }
    case ADD_ERROR:
      const { error } = payload
      return {
        ...state,
        loading: false,
        error: true,
        errors: [...state.errors, error]
      }
    default:
      return state
  }
}
