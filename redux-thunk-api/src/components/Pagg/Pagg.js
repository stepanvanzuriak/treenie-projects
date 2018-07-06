import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import ListCol from '../ListCol/ListCol'

const Pagg = ({ isShow, currentPage, nextPage, prevPage, lastPage }) => {
  const body = isShow ? (
    <ListCol style={{ textAlign: 'center', marginBottom: 10 }}>
      {currentPage > 0 ? (
        <Button
          color="primary"
          style={{ marginRight: 10 }}
          onClick={() => prevPage(currentPage)}
        >
          Prev
        </Button>
      ) : null}
      {lastPage > currentPage ? (
        <Button color="primary" onClick={() => nextPage(currentPage)}>
          Next
        </Button>
      ) : null}
    </ListCol>
  ) : null
  return <Fragment>{body}</Fragment>
}

export default Pagg
