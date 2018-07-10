import React, { Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withData } from './withData'
import { withHandlers } from './withHandlers'
import { withLoading } from './withLoading'
import { withErrorHandler } from './withErrorHandler'

const style = {
  controls: {
    marginTop: 10
  }
}

const Books = ({ isPrev, isNext, booksList, onPrev, onNext }) => (
  <Fragment>
    <Row>{booksList}</Row>
    <Row style={style.controls}>
      <Col>
        <Button onClick={onPrev} block color="primary" disabled={!isPrev}>
          Prev
        </Button>
      </Col>
      <Col>
        <Button onClick={onNext} block color="primary" disabled={!isNext}>
          Next
        </Button>
      </Col>
    </Row>
  </Fragment>
)

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

export default compose(
  withData,
  withLoading,
  withErrorHandler,
  withHandlers
)(Books)
