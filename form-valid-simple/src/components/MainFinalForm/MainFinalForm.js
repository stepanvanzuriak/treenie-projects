import React from 'react'
import FinalField from '../FinalField/FinalField'
import { Form } from 'react-final-form'
import { Button, Input, Form as BootstrapFrom } from 'reactstrap'

const onSubmit = values => {}

const MainFinalForm = ({ fields, formValidator }) => {
  const formFields = fields.map(({ name, options }) => (
    <FinalField
      key={name}
      name={name}
      type={options.type}
      component={options.component || Input}
      validate={options.validators}
      placeholder={options.placeholder}
    />
  ))
  return (
    <Form
      validate={formValidator}
      subscription={{ submitting: true, pristine: true }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <BootstrapFrom onSubmit={handleSubmit}>
          {formFields}
          <Button color="primary" block>
            Submit
          </Button>
        </BootstrapFrom>
      )}
    />
  )
}

export default MainFinalForm
