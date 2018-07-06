import React, { Fragment } from 'react'

import BooksListCards from '../BooksListCards/BooksListCards'

import {
  getBooks,
  getBook,
  openBookPage,
  clearBooks
} from '../../actions/actions'

import { connect } from 'react-redux'

const mapStateToProps = ({
  booksListCurrentStartId,
  booksListCurrentPage,
  books
}) => ({
  startId: booksListCurrentStartId,
  currentPage: booksListCurrentPage,
  books
})

const mapDispatchToProps = dispatch => ({
  getBookAndOpen: id => {
    dispatch(getBook(id))
    dispatch(openBookPage())
  },
  nextPage: id => {
    dispatch(clearBooks())
    dispatch(getBooks(id + 5))
  },
  prevPage: id => {
    dispatch(clearBooks())
    dispatch(getBooks(id - 5))
  }
})

const BooksListPage = ({
  books,
  getBookAndOpen,
  booksCount,
  startId,
  prevPage,
  nextPage
}) => (
  <Fragment>
    <BooksListCards
      isReady={books.length > 0}
      books={books}
      onMore={getBookAndOpen}
      booksCount={booksCount}
      isPaggShow={booksCount > -1}
      currentPage={startId}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  </Fragment>
)

/*   <Search disabled={props.startId !== props.currentPage} /> */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksListPage)
