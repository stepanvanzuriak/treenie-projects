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
 * Action for changing page to next
 * @returns {FluxStandardAction}
 */
export const nextPage = () => ({ type: NEXT_PAGE })

/**
 * Action for changing page to prev
 * @returns {FluxStandardAction}
 */
export const prevPage = () => ({ type: PREV_PAGE })

/**
 * Divide array by chunks
 * @param {array} array - Array to divide
 * @param {number} size - Chunk size
 * @returns {array}
 */
const chunks = (array, size) => {
  const result = []
  let tmpArray = []
  let count = 0

  array.forEach(element => {
    count++
    tmpArray.push(element)

    if (count === size) {
      result.push(tmpArray)
      count = 0
      tmpArray = []
    }
  })

  return result
}

/**
 * Action for getting books list
 * @param {number} pageSize - Count of books on list
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
      .catch(error => console.log(error))
  }
}
