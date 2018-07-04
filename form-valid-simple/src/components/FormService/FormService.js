class FormService {
  constructor() {
    this._fields = [];
  }

  add(name, { type = 'text', value = '', validators = [], placeholder = '' } = {}) {
    this._fields.push({
      invalid: true,
      messages: [],
      focused: false,
      dirty: false,
      value,
      name,
      validators,
      placeholder,
      type,
      key: Object.keys(this._fields).length,
    });
  }

  isValid() {
    return this._fields.every(field => !field.invalid);
  }

  validateForm(fields) {
    fields.forEach(field => {
      const { validators } = field;
      const value = field.value;

      const errors = validators
        .map(validator => validator(value))
        .filter(({ check }) => !check)
        .map(({ message }) => message);

      field.invalid = !!errors.length;
      field.messages = errors;
    });

    return fields;
  }

  update(name, { value, dirty, focused, invalid } = {}) {
    this._fields = this._fields.map(field => {
      if (field.name === name) {
        return {
          ...field,
          value: value || '',
          dirty: !!dirty,
          focused: !!focused,
          invalid: !!invalid,
        };
      }

      return field;
    });

    this._fields = this.validateForm(this._fields);
  }

  fields() {
    return this._fields;
  }
}

export default FormService;
