import moment from 'moment';

export const required = value => (value ? undefined : 'Required');
export const minLength = length => value =>
  value && value.length >= length ? undefined : `Must be ${length} size long`;
export const email = value =>
  /\S+@\S+\.\S+/.test(String(value).toLowerCase()) ? undefined : 'Invalid';

export const same = (check, name) => value =>
  value === check ? undefined : `Must by same as ${name}`;

export const validateDate = value =>
  moment(value, 'MM/DD/YYYY').isValid() ? undefined : 'Invalid';
