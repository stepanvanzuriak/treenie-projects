import moment from 'moment'

export const required = () => value => ({
  check: value,
  message: 'Required'
})

export const minLength = (length, message) => value => ({
  check: value.length >= length || !(value.length > 0),
  message
})

export const startWithLetter = message => value => ({
  check: value.length > 0 ? value[0].match(/[a-zA-z]/) : true,
  message
})

export const shouldInclude = (regex, message) => value => ({
  check: value.length > 0 ? value.match(regex) : true,
  message
})

export const validateDate = _ => value => ({
  check: value.length > 0 ? moment(value, 'MM/DD/YYYY').isValid() : true,
  message: 'Invalid date'
})

export const composeValidators = validators => value => {
  let error = undefined

  validators.forEach(validator => {
    if (!error) {
      const { check, message } = validator(value)

      if (!check) {
        error = message
      }
    }
  })

  return error
}
