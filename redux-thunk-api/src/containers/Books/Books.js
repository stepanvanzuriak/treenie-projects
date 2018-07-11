import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import BookCard from '../../components/BookCard';
import withData from './withData';
import withHandlers from './withHandlers';
import withLoading from './withLoading';
import withErrorHandler from './withErrorHandler';

const style = {
  controls: {
    marginTop: 10,
  },
  card: {
    marginTop: 3,
  },
};

const Books = ({
  isPrev, isNext, booksList, onPrev, onNext,
}) => {
  const books = booksList.map(
    ({
      id, title, description, excerpt, publishDate,
    }) => (
      <Col key={id} sm="6">
        <BookCard
          {...{
            style: style.card,
            id,
            title,
            description,
            excerpt,
            publishDate,
          }}
        />
      </Col>
    ),
  );

  return (
    <Fragment>
      <Row>
        {books}
      </Row>
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
  );
};

Books.defaultProps = {
  isPrev: false,
  isNext: false,
  booksList: [],
  onPrev: () => {},
  onNext: () => {},
};

Books.propTypes = {
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
  booksList: PropTypes.arrayOf(PropTypes.object),
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};

export default compose(
  withData,
  withLoading,
  withErrorHandler,
  withHandlers,
)(Books);
