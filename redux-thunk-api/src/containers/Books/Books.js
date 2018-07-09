import React, { Component, Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { BookCard } from '../../components/BookCard'
import { getBooks, prevPage, nextPage } from '../../actions/actions'
import Spinner from '../../components/Spinner'

const style = {
  card: {
    marginTop: 3
  },
  controls: {
    marginTop: 10
  }
}

class Books extends Component {
  constructor(props) {
    super(props)
    props.dispatch(getBooks(props.pageSize))
  }

  render() {
    const { isPrev, isNext, books, dispatch } = this.props

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

    const body =
      booksList.length > 0 ? (
        <Fragment>
          <Row>{booksList}</Row>
          <Row style={style.controls}>
            <Col>
              <Button
                onClick={() => dispatch(prevPage())}
                block
                color="primary"
                disabled={!isPrev}
              >
                Prev
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => dispatch(nextPage())}
                block
                color="primary"
                disabled={!isNext}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Fragment>
      ) : (
        <Spinner />
      )
    return body
  }
}

const mapStateToProps = ({ books, currentPage, pageSize, pageCount }) => ({
  pageSize,
  books: books[currentPage] || [],
  isPrev: currentPage > 0,
  isNext: currentPage !== pageCount
})

Books.defaultProps = {
  books: [],
  pageSize: 0,
  isPrev: false,
  isNext: false
}

Books.propTypes = {
  books: PropTypes.array,
  pageSize: PropTypes.number,
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool
}

export default connect(mapStateToProps)(Books)
