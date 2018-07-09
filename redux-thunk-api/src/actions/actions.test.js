import { setBooks, addError, nextPage, prevPage, getBooks } from './actions'
import { SET_BOOKS, ADD_ERROR, NEXT_PAGE, PREV_PAGE } from './actionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moment from 'moment'
import { chunks } from '../utils/utils'
import { book } from '../api/books'

const mockStore = configureMockStore([thunk])

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

test('getBooks returns right action', async () => {
  const store = mockStore({})
  const pageSize = 6

  await store.dispatch(getBooks(pageSize))
  let books = await book()

  books = chunks(
    books.data.map(book => ({
      ...book,
      Description: book.Description.substr(0, 100),
      Excerpt: book.Excerpt.substr(0, 150),
      PublishDate: moment(book.PublishDate).format('L')
    })),
    pageSize
  )

  const actions = store.getActions()
  expect(actions[0]).toEqual({ type: SET_BOOKS, payload: { books } })
})
