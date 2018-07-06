import React, { Fragment } from 'react'

import { Card, CardText, CardTitle, Button } from 'reactstrap'

import ListCol from '../ListCol/ListCol'
import FontAwesome from 'react-fontawesome'
import Pagg from '../Pagg/Pagg'

const BookCard = ({ title, author, description, id, onMore }) => (
  <ListCol style={{ marginBottom: 10 }}>
    <Card key={id} body>
      <CardTitle>
        {title} by
        <Button color="link">
          Author
          {author}
        </Button>
      </CardTitle>
      <CardText>
        <b>Description: </b>
        {`${description}...`}
      </CardText>
      <Button outline color="primary" onClick={() => onMore(id)}>
        More
      </Button>
    </Card>
  </ListCol>
)

const BooksListCards = ({
  isReady,
  books,
  onMore,
  booksCount,
  isPaggShow,
  currentPage,
  nextPage,
  prevPage
}) => {
  const booksList = books.map((element, index) => (
    <BookCard
      key={element.ID}
      id={element.ID}
      title={element.Title.toUpperCase()}
      author={element.Title.split(' ')[1]}
      description={element.Description.substr(0, 120)}
      onMore={onMore}
    />
  ))

  const body = isReady ? (
    <Fragment>
      {booksList}
      <Pagg
        currentPage={currentPage}
        lastPage={booksCount}
        isShow={isPaggShow}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Fragment>
  ) : (
    <ListCol style={{ textAlign: 'center', paddingTop: 50 }}>
      <FontAwesome name="spinner" size="3x" spin style={{ color: '#6c757d' }} />
    </ListCol>
  )

  return <Fragment> {body} </Fragment>
}

export default BooksListCards
