import { books } from '../api/books';
import { chunks, formatBook } from '../utils/utils';
import { setBooks, setBooksError, requestBooks } from './actions';

/**
 * Action for getting books list
 * @param {number} pageSize Page count in book list
 * @param {?number} currentPage Page to open
 * @returns {function}
 */
/* eslint-disable import/prefer-default-export */
export const getBooks = (pageSize, currentPage = null) => (dispatch) => {
  if (currentPage !== null) {
    return dispatch(requestBooks(currentPage));
  }
  return books()
    .then((result) => {
      dispatch(requestBooks(0));
      dispatch(setBooks(chunks(result.data.map(formatBook), pageSize)));
    })
    .catch(() => dispatch(setBooksError(':( Something bad happen. Try again later.')));
};
/* eslint-enable */
