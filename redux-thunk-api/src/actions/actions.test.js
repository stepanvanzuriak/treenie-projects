import { setBooks, addError, nextPage, prevPage, getBooks } from './actions'
import { SET_BOOKS, ADD_ERROR, NEXT_PAGE, PREV_PAGE } from './actionTypes'

import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import thunk from 'redux-thunk'
import moment from 'moment'
import { chunks } from '../utils/utils'
import { book } from '../api/books'
import { instance } from '../api/client'

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
      },
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

    const formatData = book => ({
      ...book,
      Description: book.Description.substr(0, 100),
      Excerpt: book.Excerpt.substr(0, 150),
      PublishDate: moment(book.PublishDate).format('L')
    })

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: data
      })
    })

    const store = mockStore({})
    const pageSize = 6

    await store.dispatch(getBooks(pageSize))

    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: SET_BOOKS,
      payload: {
        books: [data.map(formatData)]
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
