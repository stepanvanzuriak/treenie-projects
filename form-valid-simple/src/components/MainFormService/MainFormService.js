import React, { Component } from 'react'
import { Form, Button, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import FormService from '../FormService/FormService'
import { Field } from '../Field/Field'

class MainFormService extends Component {
  constructor(props) {
    super(props)
    this.service = new FormService()
    props.fields.map(field => this.service.add(field.name, field.options))
  }

  onChangeHandler = (name, value) => {
    this.service.update(name, { value })
    this.forceUpdate()
  }

  onSubmitHandler = e => {
    e.preventDefault()
    this.service
      .fields()
      .map(({ name }) => this.service.update(name, { dirty: true }))
    this.forceUpdate()
  }

  onBlurHandler = name => {
    this.service.update(name, { focused: false, dirty: true })
    this.forceUpdate()
  }

  onFocusHandler = name => {
    this.service.update(name, { focused: true, dirty: true })
    this.forceUpdate()
  }

  render() {
    const fields = this.service
      .fields()
      .map(
        ({
          key,
          name,
          type,
          value,
          placeholder,
          invalid,
          messages,
          focused,
          dirty,
          component = Input
        }) => {
          return (
            <Field
              type={type}
              key={key}
              name={name}
              component={component}
              value={value}
              placeholder={placeholder}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}
              onFocus={this.onFocusHandler}
              state={{ invalid, messages, focused, dirty }}
            />
          )
        }
      )

    return (
      <Form onSubmit={this.onSubmitHandler}>
        {fields}
        <Button color="primary" block>
          Submit
        </Button>
      </Form>
    )
  }
}

MainFormService.defaultProps = {
  fields: []
}

MainFormService.propsTypes = {
  fields: PropTypes.array
}

export default MainFormService
