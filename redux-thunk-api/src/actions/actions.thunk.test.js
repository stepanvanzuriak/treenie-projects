import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import thunk from 'redux-thunk'

import { instance } from '../api/client'
import { formatBook } from '../utils/utils'
import { getBooks } from './actions.thunk'
import { ERROR_BOOKS, REQUEST_BOOKS, SUCCESS_BOOKS } from './actionTypes'

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

    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: REQUEST_BOOKS,
      payload: {
        currentPage: 0
      }
    })

    expect(actions[1]).toEqual({
      type: SUCCESS_BOOKS,
      payload: {
        books: [data.map(formatBook)]
      }
    })
  })

  it('getBooks returns ERROR_BOOKS on error', async () => {
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
      type: ERROR_BOOKS,
      error: true,
      payload: {
        message: ':( Something bad happen. Try again later.'
      }
    })
  })

  it('getBooks returns REQUEST_BOOKS when current page selected', () => {
    const store = mockStore({})
    const pageSize = 6
    const currentPage = 10

    store.dispatch(getBooks(pageSize, currentPage))

    expect(store.getActions()[0]).toEqual({
      type: REQUEST_BOOKS,
      payload: {
        currentPage
      }
    })
  })
})
