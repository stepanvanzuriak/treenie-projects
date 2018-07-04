import React from 'react'
import { Input } from 'reactstrap'

export const PasswordInput = ({ placeholder, ...rest }) => (
  <Input type="password" placeholder={placeholder} {...rest} />
)
