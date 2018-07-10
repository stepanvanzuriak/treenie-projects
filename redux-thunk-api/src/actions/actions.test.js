import { setBooks, setBooksError, requestBooks } from './actions'
import { SUCCESS_BOOKS, ERROR_BOOKS, REQUEST_BOOKS } from './actionTypes'

test('setBooks returns right action', () => {
  expect(setBooks([1, 2, 3])).toEqual({
    type: SUCCESS_BOOKS,
    payload: { books: [1, 2, 3] }
  })
})

test('setBooksError returns right action', () => {
  expect(setBooksError('ERROR')).toEqual({
    type: ERROR_BOOKS,
    error: true,
    payload: { message: 'ERROR' }
  })
})

test('requestBooks returns right action', () => {
  expect(requestBooks(1)).toEqual({
    type: REQUEST_BOOKS,
    payload: { currentPage: 1 }
  })
})
