import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText } from 'reactstrap'

export const BookCard = ({
  title,
  description,
  excerpt,
  publishDate,
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
  </Card>
)

BookCard.defaultProps = {
  title: '',
  description: '',
  onButtonClick: () => {}
}

BookCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onButtonClick: PropTypes.func
}
