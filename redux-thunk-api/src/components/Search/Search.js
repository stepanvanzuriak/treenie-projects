import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import ListCol from '../ListCol/ListCol'

const Search = ({ disabled }) => {
  return (
    <ListCol style={{ marginBottom: 10 }}>
      <InputGroup>
        <Input placeholder="Enter book or author name" />
        <InputGroupAddon addonType="append">
          <Button disabled={disabled} color="secondary">
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </ListCol>
  )
}

export default Search
