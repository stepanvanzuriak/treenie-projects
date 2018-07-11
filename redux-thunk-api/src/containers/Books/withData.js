import { compose, lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'

import { requestBooksAsync } from '../../actions/actions'

const mapStateToProps = ({
  books,
  currentPage,
  pageSize,
  pageCount,
  loading,
  error
}) => ({
  books,
  currentPage,
  pageSize,
  pageCount,
  loading,
  error
})

export const withData = compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, pageSize } = this.props
      dispatch(requestBooksAsync(pageSize))
    }
  }),
  withProps(({ books, currentPage, pageSize, pageCount, loading, error }) => ({
    pageSize,
    loading,
    error,
    currentPage,
    isPrev: currentPage > 0,
    isNext: currentPage !== pageCount,
    booksList: (books[currentPage] || []).map(
      ({
        ID: id,
        Title: title,
        Description: description,
        Excerpt: excerpt,
        PublishDate: publishDate
      }) => ({
        id,
        title,
        description,
        excerpt,
        publishDate
      })
    )
  }))
)
