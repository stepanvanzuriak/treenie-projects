import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

const BookCard = ({
  title,
  description,
  excerpt,
  publishDate,
  linkText,
  onButtonClick,
  id,
  ...rest
}) => (
  <Card body key={id} {...rest}>
    <CardTitle>
      <b>{title}</b>
    </CardTitle>
    <CardText>
      <b>Description:</b> {description}
    </CardText>
    <CardText>
      <b>Excerpt:</b> {excerpt}
    </CardText>
    <CardText>
      <b>PublishDate:</b> {publishDate}
    </CardText>
    <Button outline color="info" onClick={() => onButtonClick(id)}>
      {linkText}
    </Button>
  </Card>
)

BookCard.defaultProps = {
  title: '',
  description: '',
  linkText: '',
  onButtonClick: () => {}
}

BookCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  onButtonClick: PropTypes.func
}

export default BookCard
