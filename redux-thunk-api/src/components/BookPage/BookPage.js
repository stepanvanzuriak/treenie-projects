import React, { Fragment } from 'react'

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import ListCol from '../ListCol/ListCol'
import { connect } from 'react-redux'
import { openBooksListPage } from '../../actions/actions'

const mapStateToProps = ({ currentBook, booksListCurrentStartId }) => ({
  currentBook,
  startId: booksListCurrentStartId
})

const mapDispatchToProps = dispatch => ({
  returnToBookList: () => {
    dispatch(openBooksListPage())
  }
})

const BookPage = ({ currentBook, returnToBookList }) => {
  const body = currentBook ? (
    <ListCol>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{currentBook.Title.toUpperCase()}</CardTitle>
          <CardSubtitle>
            <Button color="link">
              Author {currentBook.Title.split(' ')[1]}
            </Button>
          </CardSubtitle>
          <CardText>
            <b>Description: </b> {currentBook.Description.substr(0, 300)}
            <br />
            <b>Page count: </b> {currentBook.PageCount}
            <br />
            <b>Publish date:</b> {currentBook.PublishDate}
          </CardText>
        </CardBody>
      </Card>
    </ListCol>
  ) : (
    <ListCol style={{ textAlign: 'center', paddingTop: 50 }}>
      <FontAwesome name="spinner" size="3x" spin style={{ color: '#6c757d' }} />
    </ListCol>
  )
  return (
    <Fragment>
      <ListCol style={{ textAlign: 'center', marginBottom: 10 }}>
        <Button color="primary" block onClick={returnToBookList}>
          Return to Book list
        </Button>
      </ListCol>
      {body}
    </Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage)
