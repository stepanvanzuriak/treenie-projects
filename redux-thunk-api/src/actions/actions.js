import moment from 'moment'

import { SET_BOOKS, NEXT_PAGE, PREV_PAGE, ADD_ERROR } from './actionTypes'
import { books } from '../api/books'
import { chunks } from '../utils/utils'

/**
 * Action for book setting
 *
 * @param {array} books  Books list
 * @returns {FluxStandardAction}
 */
export const setBooks = books => ({ type: SET_BOOKS, payload: { books } })

/**
 * Action for error setting
 *
 * @param {string} error  Error text
 * @returns {FluxStandardAction}
 */
export const addError = error => ({ type: ADD_ERROR, payload: { error } })

/**
 * Action for changing page to next
 *
 * @returns {FluxStandardAction}
 */
export const nextPage = () => ({ type: NEXT_PAGE })

/**
 * Action for changing page to prev
 *
 * @returns {FluxStandardAction}
 */
export const prevPage = () => ({ type: PREV_PAGE })

/**
 * Action for getting books list
 * @param {number} pageSize Page count in book list
 * @returns {function}
 */
export const getBooks = pageSize => {
  return dispatch => {
    books()
      .then(result =>
        dispatch(
          setBooks(
            chunks(
              result.data.map(book => ({
                ...book,
                Description: book.Description.substr(0, 100),
                Excerpt: book.Excerpt.substr(0, 150),
                PublishDate: moment(book.PublishDate).format('L')
              })),
              pageSize
            )
          )
        )
      )
      .catch(error =>
        dispatch(addError(':( Something bad happen. Try again later.'))
      )
  }
}
