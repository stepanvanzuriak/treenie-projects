import React from 'react'
import { compose, lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'
import { getBooks } from '../../actions/actions.thunk'
import { Col } from 'reactstrap'
import { BookCard } from '../../components/BookCard'

const style = {
  card: {
    marginTop: 3
  }
}

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
      this.props.dispatch(getBooks(this.props.pageSize))
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
      }) => (
        <Col key={id} sm="6">
          <BookCard
            {...{
              style: style.card,
              id,
              title,
              description,
              excerpt,
              publishDate
            }}
          />
        </Col>
      )
    )
  }))
)
