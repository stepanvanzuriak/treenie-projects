import React from 'react'
import { Col } from 'reactstrap'

const ListCol = ({ children, ...rest }) => {
  return (
    <Col xs="12" sm={{ size: 6, offset: 3 }} {...rest}>
      {children}
    </Col>
  )
}

export default ListCol
