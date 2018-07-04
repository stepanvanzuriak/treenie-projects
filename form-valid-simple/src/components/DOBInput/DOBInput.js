import React from 'react'
import { Input } from 'reactstrap'
import InputMask from 'react-input-mask'

export const DOBInput = props => (
  <InputMask {...props} mask="99/99/9999" maskChar=" " placeholder="MM/DD/YYYY">
    {inputProps => <Input {...inputProps} />}
  </InputMask>
)
