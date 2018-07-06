import moment from 'moment'

import { SET_BOOKS, NEXT_PAGE, PREV_PAGE } from './actionTypes'
import { books } from '../api/books'

/**
 * Action for book setting
 * @param {array} books - Books list
 * @returns {FluxStandardAction}
 */
const setBooks = books => ({ type: SET_BOOKS, payload: { books } })

/**
 * Action for change page to next
 * @returns {FluxStandardAction}
 */
export const nextPage = () => ({ type: NEXT_PAGE })

/**
 * Action for change page to prev
 * @returns {FluxStandardAction}
 */
export const prevPage = () => ({ type: PREV_PAGE })

/**
 * Action for getting books list
 * @returns {function}
 */
export const getBooks = (currentPage, pageSize) => {
  return dispatch => {
    books()
      .then(result =>
        dispatch(
          setBooks(
            result.data
              .filter(
                ({ ID }) =>
                  ID >= currentPage * pageSize + 1 &&
                  ID < currentPage * pageSize + pageSize + 1
              )
              .map(book => ({
                ...book,
                Description: book.Description.substr(0, 100),
                Excerpt: book.Excerpt.substr(0, 150),
                PublishDate: moment(book.PublishDate).format('L')
              }))
          )
        )
      )
      .catch(error => console.log(error))
  }
}
