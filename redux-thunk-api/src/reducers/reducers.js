import {
  SUCCESS_BOOKS,
  ERROR_BOOKS,
  REQUEST_BOOKS,
} from '../actions/actionTypes';

const initState = {
  books: [],
  loading: true,
  error: null,
  currentPage: 0,
  pageSize: 6,
  pageCount: 32,
};
/* eslint-disable import/prefer-default-export */
export const bookShop = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST_BOOKS:
      const { currentPage } = payload;
      return { ...state, currentPage };
    case SUCCESS_BOOKS:
      const { books } = payload;
      return {
        ...state,
        books,
        loading: false,
        error: null,
      };
    case ERROR_BOOKS:
      const { message } = payload;
      return {
        ...state,
        loading: false,
        error: message,
      };
    default:
      return state;
  }
};
/* eslint-enable */
