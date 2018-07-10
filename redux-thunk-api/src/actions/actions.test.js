import { setBooks, addError, nextPage, prevPage, getBooks } from './actions'
import { SET_BOOKS, ADD_ERROR, NEXT_PAGE, PREV_PAGE } from './actionTypes'

import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import thunk from 'redux-thunk'

import { instance } from '../api/client'
import { formatBook } from '../utils/utils'

const mockStore = configureMockStore([thunk])

describe('async actions', () => {
  beforeEach(() => {
    moxios.install(instance)
  })

  afterEach(() => {
    moxios.uninstall(instance)
  })

  test('getBooks returns right action', async () => {
    const data = [
      {
        ID: 1,
        Title: 'Book 1',
        Description:
          'Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\n',
        PageCount: 100,
        Excerpt:
          'Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\n',
        PublishDate: '2018-07-08T14:41:49.8522461+00:00'
      }
    ]

    const store = mockStore({})
    const pageSize = 6

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: data
      })
    })

    await store.dispatch(getBooks(pageSize))

    expect(store.getActions()[0]).toEqual({
      type: SET_BOOKS,
      payload: {
        books: [data.map(formatBook)]
      }
    })
  })

  it('getBooks returns SET_ERROR on error', async () => {
    const store = mockStore({})
    const pageSize = 6

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.reject({
        status: 500,
        response: { message: 'problem' }
      })
    })

    await store.dispatch(getBooks(pageSize))

    expect(store.getActions()[0]).toEqual({
      type: ADD_ERROR,
      payload: {
        error: ':( Something bad happen. Try again later.'
      }
    })
  })
})

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
