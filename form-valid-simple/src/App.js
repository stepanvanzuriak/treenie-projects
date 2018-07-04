import React, { Component } from 'react'
import './App.css'

import {
  minLength,
  startWithLetter,
  shouldInclude,
  validateDate,
  required
} from './validators/validators'
import MainFormService from './components/MainFormService/MainFormService'

const fields = [
  {
    name: 'username',
    options: {
      placeholder: 'Username',
      validators: [
        required(),
        minLength(3, 'Username must be more then 3 letters length'),
        startWithLetter('Username must start with letter')
      ]
    }
  },
  {
    name: 'password1',
    options: {
      type: 'password',
      placeholder: 'Password',
      validators: [
        required(),
        minLength(6, 'Password must be more then 8 letters'),
        shouldInclude(/[A-Z]/, 'Password must include big letter'),
        shouldInclude(/[\d]/, 'Password must include numbers'),
        shouldInclude(/[$@_!]/, 'Password must include special symbols $,@,_,!')
      ]
    }
  },
  {
    name: 'password2',
    options: {
      type: 'password',
      placeholder: 'Password again',
      validators: [
        required(),
        minLength(6, 'Password must be more then 8 letters'),
        shouldInclude(/[A-Z]/, 'Password must include big letter'),
        shouldInclude(/[\d]/, 'Password must include numbers'),
        shouldInclude(/[$@_!]/, 'Password must include special symbols $,@,_,!')
      ]
    }
  },
  {
    name: 'dob',
    options: {
      type: 'dob',
      validators: [
        required(),
        minLength(1, 'Date of birth must be not empty'),
        validateDate()
      ]
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Absolute-Center is-Responsive">
            <MainFormService fields={fields} />
          </div>
        </div>
      </div>
    )
  }
}

/*
const formValidator = fields => {
  const errors = {}
  const { password1, password2 } = fields
  if (
    (!password1.invalid || !password2.invalid) &&
    password1.value !== password2.value
  ) {
    errors.password2 = ['Not equal with Password field']
  }
  return errors
}
*/

export default App
