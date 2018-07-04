import React, { Component } from 'react'
import { FormGroup, FormFeedback } from 'reactstrap'
import { TextInput } from '../TextInput/TextInput'
import PropTypes from 'prop-types'

export class Field extends Component {
  onBlur = () => this.props.onBlur(this.props.name)
  onFocus = () => this.props.onFocus(this.props.name)
  onChange = e => this.props.onChange(this.props.name, e.target.value)

  render() {
    const { component, state, ...rest } = this.props
    const Input = component
    let errors = null
    if (state.invalid && state.dirty && !state.focused) {
      errors = state.messages.map((message, index) => (
        <FormFeedback key={index}>{message}</FormFeedback>
      ))
    }

    return (
      <FormGroup>
        <Input
          {...rest}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
          invalid={!!errors}
        />
        {errors}
      </FormGroup>
    )
  }
}

Field.defaultProps = {
  component: TextInput,
  state: {},
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
}

Field.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  state: PropTypes.object,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func
}
