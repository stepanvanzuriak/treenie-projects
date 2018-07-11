import {
  ERROR_BOOKS,
  SUCCESS_BOOKS,
  REQUEST_BOOKS,
  REQUEST_BOOKS_ASYNC
} from './actionTypes'

/**
 * Action for setting book page
 *
 * @param {number} currentPage  Book page to display
 * @returns {FluxStandardAction}
 */
export const requestBooks = currentPage => ({
  type: REQUEST_BOOKS,
  payload: { currentPage }
})

/**
 * Action for book setting
 *
 * @param {array} books  Books list
 * @returns {FluxStandardAction}
 */
// FIXME: CHANGE TO RIGHT FluxStandardAction
export const setBooks = books => ({ type: SUCCESS_BOOKS, payload: { books } })

/**
 * Action for error setting
 *
 * @param {string} message  Error text
 * @returns {FluxStandardAction}
 */
export const setBooksError = message => ({
  type: ERROR_BOOKS,
  error: true,
  payload: { message }
})

/**
 * Action for saga request books
 *
 * @param {number} pageSize  Page count in book list
 * @returns {FluxStandardAction}
 */
export const requestBooksAsync = pageSize => ({
  type: REQUEST_BOOKS_ASYNC,
  payload: { pageSize }
})
