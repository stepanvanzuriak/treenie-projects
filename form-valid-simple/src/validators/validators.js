import moment from 'moment'

export const required = () => value => ({
  check: value.length > 0,
  message: 'Required'
})

export const finalRequired = () => value => {
  console.log(value, value ? undefined : 'Required')
  return value ? undefined : 'Required'
}

export const minLength = (length, message) => value => ({
  check: value.length >= length || !(value.length > 0),
  message
})

export const finalMinLength = (length, message) => value =>
  value.length >= length || !(value.length > 0) ? undefined : message

export const startWithLetter = message => value => ({
  check: value.length > 0 ? value[0].match(/[a-zA-z]/) : true,
  message
})

export const finalStartWithLetter = message => value =>
  (value.length > 0 ? value[0].match(/[a-zA-z]/) : true) ? undefined : message

export const shouldInclude = (regex, message) => value => ({
  check: value.length > 0 ? value.match(regex) : true,
  message
})

export const finalShouldInclude = (regex, message) => value =>
  (value.length > 0 ? value.match(regex) : true) ? undefined : message

export const validateDate = _ => value => ({
  check: value.length > 0 ? moment(value, 'MM/DD/YYYY').isValid() : true,
  message: 'Invalid date'
})

export const finalValidateDate = _ => value =>
  (value.length > 0
  ? moment(value, 'MM/DD/YYYY').isValid()
  : true)
    ? undefined
    : 'Invalid date'

export const composeValidators = validators => value => {
  console.log(value)
  let error = undefined

  validators.forEach(validator => {
    if (!error) {
      const result = validator(value)

      if (result !== undefined) {
        error = result
      }
    }
  })

  return error
}
