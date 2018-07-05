import React, { Component } from 'react'
import './App.css'
import { DOBInput } from './components/DOBInput/DOBInput'
import {
  required,
  minLength,
  startWithLetter,
  shouldInclude,
  validateDate,
  composeValidators
} from './validators/validators'

import MainFinalForm from './components/MainFinalForm/MainFinalForm'

const fields = [
  {
    name: 'username',
    options: {
      placeholder: 'Username',
      validators: composeValidators([
        required(),
        minLength(3, 'Username must be more then 3 letters length'),
        startWithLetter('Username must start with letter')
      ])
    }
  },
  {
    name: 'password1',
    options: {
      type: 'password',
      placeholder: 'Password',
      validators: composeValidators([
        required(),
        minLength(6, 'Password must be more then 8 letters'),
        shouldInclude(/[A-Z]/, 'Password must include big letter'),
        shouldInclude(/[\d]/, 'Password must include numbers'),
        shouldInclude(/[$@_!]/, 'Password must include special symbols $,@,_,!')
      ])
    }
  },
  {
    name: 'password2',
    options: {
      type: 'password',
      placeholder: 'Password again',
      validators: composeValidators([
        required(),
        minLength(6, 'Password must be more then 8 letters'),
        shouldInclude(/[A-Z]/, 'Password must include big letter'),
        shouldInclude(/[\d]/, 'Password must include numbers'),
        shouldInclude(/[$@_!]/, 'Password must include special symbols $,@,_,!')
      ])
    }
  },
  {
    name: 'dob',
    options: {
      component: DOBInput,
      validators: composeValidators([
        required(),
        minLength(1, 'Date of birth must be not empty'),
        validateDate()
      ])
    }
  }
]

const formValidator = values => {
  const errors = {}
  if (values.password1 !== values.password2) {
    errors.password2 = 'Must be same with Password'
  }

  return errors
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Absolute-Center is-Responsive">
            <MainFinalForm fields={fields} formValidator={formValidator} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
