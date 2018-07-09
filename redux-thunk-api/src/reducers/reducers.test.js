import { bookShop } from './reducers'
import { setBooks, nextPage, prevPage, addError } from '../actions/actions'

describe('bookShop reducer', () => {
  const initState = {
    books: [],
    loading: true,
    error: false,
    errors: [],
    currentPage: 0,
    pageSize: 6,
    pageCount: 32
  }

  test('should return the initial state', () => {
    expect(bookShop(undefined, {})).toEqual(initState)
  })

  test('should handle SET_BOOKS', () => {
    expect(bookShop(undefined, setBooks([1, 2, 3]))).toEqual({
      ...initState,
      books: [1, 2, 3],
      loading: false,
      error: false,
      errors: []
    })
  })

  test('should handle NEXT_PAGE', () => {
    expect(bookShop(undefined, nextPage())).toEqual({
      ...initState,
      currentPage: initState.currentPage + 1
    })
  })

  test('should handle PREV_PAGE', () => {
    expect(bookShop(undefined, prevPage())).toEqual({
      ...initState,
      currentPage: initState.currentPage - 1
    })
  })

  test('should handle ADD_ERROR', () => {
    expect(bookShop(undefined, addError('ERROR'))).toEqual({
      ...initState,
      loading: false,
      error: true,
      errors: ['ERROR']
    })
  })
})
