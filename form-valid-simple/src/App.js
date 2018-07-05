import React, { Component } from 'react'
import './App.css'
import { DOBInput } from './components/DOBInput/DOBInput'
import {
  finalRequired,
  finalMinLength,
  finalStartWithLetter,
  finalShouldInclude,
  finalValidateDate,
  composeValidators
} from './validators/validators'

import MainFinalForm from './components/MainFinalForm/MainFinalForm'

const fields = [
  {
    name: 'username',
    options: {
      placeholder: 'Username',
      validators: composeValidators([
        finalRequired(),
        finalMinLength(3, 'Username must be more then 3 letters length'),
        finalStartWithLetter('Username must start with letter')
      ])
    }
  },
  {
    name: 'password1',
    options: {
      type: 'password',
      placeholder: 'Password',
      validators: composeValidators([
        finalRequired(),
        finalMinLength(6, 'Password must be more then 8 letters'),
        finalShouldInclude(/[A-Z]/, 'Password must include big letter'),
        finalShouldInclude(/[\d]/, 'Password must include numbers'),
        finalShouldInclude(
          /[$@_!]/,
          'Password must include special symbols $,@,_,!'
        )
      ])
    }
  },
  {
    name: 'password2',
    options: {
      type: 'password',
      placeholder: 'Password again',
      validators: composeValidators([
        finalRequired(),
        finalMinLength(6, 'Password must be more then 8 letters'),
        finalShouldInclude(/[A-Z]/, 'Password must include big letter'),
        finalShouldInclude(/[\d]/, 'Password must include numbers'),
        finalShouldInclude(
          /[$@_!]/,
          'Password must include special symbols $,@,_,!'
        )
      ])
    }
  },
  {
    name: 'dob',
    options: {
      component: DOBInput,
      validators: composeValidators([
        finalRequired(),
        finalMinLength(1, 'Date of birth must be not empty'),
        finalValidateDate()
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
