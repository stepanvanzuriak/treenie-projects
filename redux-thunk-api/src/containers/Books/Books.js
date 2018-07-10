import React, { Component, Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { BookCard } from '../../components/BookCard'
import { Spinner } from '../../components/Spinner'
import { Error } from '../../components/Error'
import { getBooks } from '../../actions/actions.thunk'

const style = {
  card: {
    marginTop: 3
  },
  controls: {
    marginTop: 10
  }
}

class Books extends Component {
  componentDidMount() {
    this.props.dispatch(getBooks(this.props.pageSize))
  }

  render() {
    const {
      isPrev,
      isNext,
      books,
      dispatch,
      loading,
      error,
      currentPage,
      pageSize
    } = this.props

    const booksList = books.map(
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

    const body = loading ? (
      <Spinner />
    ) : error ? (
      <Error text={error} />
    ) : (
      <Fragment>
        <Row>{booksList}</Row>
        <Row style={style.controls}>
          <Col>
            <Button
              onClick={() => dispatch(getBooks(pageSize, currentPage - 1))}
              block
              color="primary"
              disabled={!isPrev}
            >
              Prev
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => dispatch(getBooks(pageSize, currentPage + 1))}
              block
              color="primary"
              disabled={!isNext}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Fragment>
    )
    return body
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
  pageSize,
  loading,
  error,
  currentPage,
  books: books[currentPage] || [],
  isPrev: currentPage > 0,
  isNext: currentPage !== pageCount
})

Books.defaultProps = {
  books: [],
  error: null,
  currentPage: 0,
  loading: true,
  pageSize: 0,
  isPrev: false,
  isNext: false
}

Books.propTypes = {
  currentPage: PropTypes.number,
  error: PropTypes.string,
  books: PropTypes.array,
  loading: PropTypes.bool,
  pageSize: PropTypes.number,
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool
}

export default connect(mapStateToProps)(Books)
