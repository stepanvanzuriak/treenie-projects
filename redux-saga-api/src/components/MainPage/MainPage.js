import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'
import BookCard from './BookCard/BookCard'
import {
  openBookPage,
  getBook,
  nextMainPage,
  prevMainPage,
  getBooksList
} from '../actions/actions'

const mapStateToProps = ({ books, booksListPage, booksPagesCount }) => ({
  books,
  booksListPage,
  booksPagesCount
})

const mapDispatchToProps = dispatch => ({
  openBookPage: id => {
    dispatch(getBook(id))
    dispatch(openBookPage())
  },
  nextPage: () => {
    dispatch(nextMainPage())
    dispatch(getBooksList())
  },
  prevPage: () => {
    dispatch(prevMainPage())
    dispatch(getBooksList())
  }
})

const style = {
  card: { marginTop: 10 },
  rowForControls: { marginTop: 10, marginBottom: 10 }
}

const MainPage = ({
  books,
  booksListPage,
  booksPagesCount,
  openBookPage,
  nextPage,
  prevPage
}) => {
  const booksList = books.map(book => (
    <Col key={book.ID} sm="6">
      <BookCard
        title={book.Title}
        description={book.Description}
        excerpt={book.Excerpt}
        publishDate={book.PublishDate}
        id={book.ID}
        linkText="More"
        onButtonClick={openBookPage}
        style={style.card}
      />
    </Col>
  ))
  const isPrev = !(booksListPage > 1)
  const isNext = !(booksPagesCount > booksListPage)
  return (
    <Fragment>
      <Row>{booksList}</Row>
      <Row style={style.rowForControls}>
        <Col>
          <Button block onClick={prevPage} color="primary" disabled={isPrev}>
            Prev
          </Button>
        </Col>
        <Col>
          <Button block onClick={nextPage} color="primary" disabled={isNext}>
            Next
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
