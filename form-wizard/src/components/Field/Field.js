import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Label, FormGroup, Input } from 'reactstrap';

const style = {
  errors: {
    color: 'red'
  }
};

const component = ({ input, type, meta: { touched, error } }) => (
  <FormGroup>
    <Input {...input} type={type} />
    {touched && error && <span style={style.errors}>{error}</span>}
  </FormGroup>
);

const Field = ({ name, type, label, validate }) => {
  return (
    <div>
      <Label>{label}</Label>
      <ReduxField
        name={name}
        type={type}
        validate={validate}
        component={component}
      />
    </div>
  );
};

Field.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  validate: []
};
Field.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.array
};

export default Field;
