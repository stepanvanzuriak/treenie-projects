import React from 'react'
import { Field } from 'react-final-form'
import { FormGroup } from 'reactstrap'

const FinalField = ({ placeholder, component, type = 'text', ...rest }) => {
  const Component = component
  return (
    <Field {...rest}>
      {({ input, meta }) => (
        <FormGroup>
          <Component {...input} type={type} placeholder={placeholder} />

          {!meta.active &&
            meta.touched &&
            meta.error && <span style={{ color: 'red' }}>{meta.error}</span>}
        </FormGroup>
      )}
    </Field>
  )
}

export default FinalField
