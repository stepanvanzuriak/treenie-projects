import { compose, withHandlers as wHandlers } from 'recompose'
import { getBooks } from '../../actions/actions.thunk'

export const withHandlers = compose(
  wHandlers({
    onPrev: ({ pageSize, currentPage, dispatch }) => () =>
      dispatch(getBooks(pageSize, currentPage - 1)),
    onNext: ({ pageSize, currentPage, dispatch }) => () =>
      dispatch(getBooks(pageSize, currentPage + 1))
  })
)
