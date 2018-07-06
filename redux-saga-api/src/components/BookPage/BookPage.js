import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap'
import { openMainPage } from '../actions/actions'

const mapStateToProps = ({ selectedBook }) => ({
  isReady: !!selectedBook,
  title: selectedBook && selectedBook.Title,
  excerpt: selectedBook && selectedBook.Excerpt,
  pageCount: selectedBook && selectedBook.PageCount,
  publishDate: selectedBook && selectedBook.PublishDate
})
const mapDispatchToProps = dispatch => ({
  openMainPage: () => dispatch(openMainPage())
})

const style = {
  card: { width: 500, marginTop: 30 },
  button: { width: 500, marginTop: 30 }
}

const BookPage = ({
  openMainPage,
  isReady,
  title,
  excerpt,
  pageCount,
  imageUrl = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
  publishDate
}) => {
  const body = isReady ? (
    <Card style={style.card} className="mx-auto">
      <CardImg top src={imageUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          <b>{title}</b>
        </CardTitle>
        <CardText>
          <b>Excerpt:</b> {excerpt}
        </CardText>
        <CardText>
          <b>Pages:</b> {pageCount}
        </CardText>
        <CardText>
          <b>PublishDate:</b> {publishDate}
        </CardText>
      </CardBody>
    </Card>
  ) : null
  return (
    <Fragment>
      <Button
        block
        className="mx-auto"
        color="primary"
        style={style.button}
        onClick={openMainPage}
      >
        Return
      </Button>
      {body}
    </Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage)
