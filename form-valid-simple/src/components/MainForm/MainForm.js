import React, { Component } from 'react'
import { Button, Form } from 'reactstrap'
import { Field } from '../Field/Field'
import { TextInput } from '../TextInput/TextInput'
import { PasswordInput } from '../PasswordInput/PasswordInput'
import { DOBInput } from '../DOBInput/DOBInput'

import PropTypes from 'prop-types'

export class MainForm extends Component {
  constructor(props) {
    super(props)
    const fields = {
      username: {
        name: 'username',
        value: '',
        invalid: true,
        messages: [],
        focused: false,
        dirty: false
      },
      password1: {
        name: 'password1',
        value: '',
        invalid: true,
        messages: [],
        focused: false,
        dirty: false
      },
      password2: {
        name: 'password2',
        value: '',
        invalid: true,
        messages: [],
        focused: false,
        dirty: false
      },
      dob: {
        name: 'dob',
        value: '',
        invalid: true,
        messages: [],
        focused: false,
        dirty: false
      }
    }
    this.state = this.validateForm(fields)
  }

  validateForm(fields, values = {}) {
    const { formValidator } = this.props

    Object.entries(fields).forEach(([name, field]) => {
      const validators = this.props.validators[name] || []
      const value = values[name] || field.value
      const errors = validators
        .map(validator => {
          return validator(value)
        })
        .filter(({ check }) => {
          return !check
        })
        .map(({ message }) => {
          return message
        })

      field.invalid = !!errors.length
      field.messages = errors
    })

    Object.entries(formValidator(fields)).forEach(([name, errors]) => {
      Array.prototype.push.call(fields[name].messages, errors)
      if (errors.length) {
        fields[name].invalid = true
      }
    })

    return fields
  }

  isValid() {
    return Object.entries(this.state).every(([_, field]) => {
      return !field.invalid
    })
  }

  onFocusHandler = name => {
    const field = { ...this.state[name] }
    field.dirty = true
    field.focused = true
    this.setState({ [name]: field })
  }

  onChangeHandler = (value, name) => {
    const field = { ...this.state[name] }
    field.value = value
    this.setState(this.validateForm({ ...this.state, [name]: field }))
  }

  onBlurHandler = name => {
    const field = { ...this.state[name] }
    field.focused = false
    this.setState({ [name]: field })
  }

  onSubmitHandler = e => {
    e.preventDefault()

    const state = { ...this.state }

    Object.entries(state).forEach(([name, field]) => {
      state[name].focused = false
      state[name].dirty = true
    })

    this.setState(this.validateForm({ ...state }))
  }

  render() {
    const { username, password1, password2, dob } = this.state

    return (
      <Form onSubmit={this.onSubmitHandler}>
        <Field
          component={TextInput}
          placeholder="Username"
          name="username"
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          state={username}
        />
        <Field
          component={PasswordInput}
          placeholder="Password"
          name="password1"
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          state={password1}
        />
        <Field
          component={PasswordInput}
          placeholder="Password again"
          name="password2"
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          state={password2}
        />
        <Field
          component={DOBInput}
          name="dob"
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          state={dob}
        />
        <Button color="primary" block>
          Submit
        </Button>
      </Form>
    )
  }
}

MainForm.defaultProps = {
  validators: {},
  formValidator: () => {}
}

MainForm.propTypes = {
  validators: PropTypes.object,
  formValidator: PropTypes.func
}
