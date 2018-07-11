import moxios from 'moxios'
import { loadBooks } from './sagas'
import { runSaga } from '../../node_modules/redux-saga'
import { chunks, formatBook } from '../utils/utils'
import { instance } from '../api/client'
import { setBooks } from '../actions/actions'
import { ERROR_BOOKS, SUCCESS_BOOKS } from '../actions/actionTypes'

describe('async sagas actions', () => {
  beforeEach(() => {
    moxios.install(instance)
  })

  afterEach(() => {
    moxios.uninstall(instance)
  })

  test('loadBooks returns right action', async () => {
    const dispatched = []
    const pageSize = 6
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

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: data
      })
    })

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ state: 'test' })
      },
      loadBooks,
      { payload: { pageSize } }
    ).done

    expect(dispatched).toEqual([
      {
        type: SUCCESS_BOOKS,
        payload: {
          books: [data.map(formatBook)]
        }
      }
    ])
  })

  test('loadBooks returns ERROR_BOOKS on error', async () => {
    const dispatched = []
    const pageSize = 6
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

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.reject({
        status: 500,
        response: { message: 'problem' }
      })
    })

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ state: 'test' })
      },
      loadBooks,
      { payload: { pageSize } }
    ).done

    expect(dispatched).toEqual([
      {
        type: ERROR_BOOKS,
        error: true,
        payload: {
          message: ':( Something bad happen. Try again later.'
        }
      }
    ])
  })
})
