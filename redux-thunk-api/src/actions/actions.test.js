import { setBooks, addError, nextPage, prevPage } from './actions'
import { SET_BOOKS, ADD_ERROR, NEXT_PAGE, PREV_PAGE } from './actionTypes'

test('setBooks returns right action', () => {
  expect(setBooks([1, 2, 3])).toEqual({
    type: SET_BOOKS,
    payload: { books: [1, 2, 3] }
  })
})

test('addError returns right action', () => {
  expect(addError('ERROR')).toEqual({
    type: ADD_ERROR,
    payload: { error: 'ERROR' }
  })
})

test('nextPage returns right action', () => {
  expect(nextPage()).toEqual({
    type: NEXT_PAGE
  })
})

test('prevPage returns right action', () => {
  expect(prevPage()).toEqual({ type: PREV_PAGE })
})
