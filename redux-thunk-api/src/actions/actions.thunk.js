import { books } from '../api/books'
import { chunks, formatBook } from '../utils/utils'
import { setBooks, setBooksError, requestBooks } from './actions'

/**
 * Action for getting books list
 * @param {number} pageSize Page count in book list
 * @returns {function}
 */
export const getBooks = (pageSize, currentPage) => {
  return dispatch => {
    return books()
      .then(result => {
        if (currentPage) {
          dispatch(requestBooks(currentPage))
        } else {
          dispatch(requestBooks(0))
          dispatch(setBooks(chunks(result.data.map(formatBook), pageSize)))
        }
      })
      .catch(error =>
        dispatch(setBooksError(':( Something bad happen. Try again later.'))
      )
  }
}
