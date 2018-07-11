import { bookShop } from './reducers'
import { setBooks, requestBooks, setBooksError } from '../actions/actions'

describe('bookShop reducer', () => {
  const initState = {
    books: [],
    loading: true,
    error: null,
    currentPage: 0,
    pageSize: 6,
    pageCount: 32
  }

  test('should return the initial state', () => {
    expect(bookShop(undefined, {})).toEqual(initState)
  })

  test('should handle REQUEST_BOOKS', () => {
    expect(bookShop(undefined, requestBooks(10))).toEqual({
      ...initState,
      currentPage: 10
    })
  })

  test('should handle SUCCESS_BOOKS', () => {
    expect(bookShop(undefined, setBooks([1, 2, 3]))).toEqual({
      ...initState,
      books: [1, 2, 3],
      loading: false,
      error: null
    })
  })

  test('should handle ERROR_BOOKS', () => {
    expect(bookShop(undefined, setBooksError('ERROR'))).toEqual({
      ...initState,
      loading: false,
      error: 'ERROR'
    })
  })
})
