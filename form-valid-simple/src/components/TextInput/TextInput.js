import React from 'react'
import { Input } from 'reactstrap'

export const TextInput = ({ placeholder, ...rest }) => (
  <Input placeholder={placeholder} {...rest} />
)
