import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Label, FormGroup, Input } from 'reactstrap';

const style = {
  errors: {
    color: 'red'
  },
  input: {
    border: 0,
    borderRadius: 0,
    borderBottom: '1px solid #ccc'
  },
  label: {
    fontSize: 12
  },

  labelError: {
    fontSize: 12,
    color: 'red'
  }
};

const Component = ({
  input,
  type,
  label,
  meta: { touched, error },
  placeholder = '',
  onClick,
  style: propStyle,
  children,
  ...props
}) => {
  if (type === 'radio') {
    return (
      <FormGroup check>
        <Label style={touched && error ? style.labelError : style.label} check>
          <Input
            {...input}
            {...props}
            type={type}
            style={{ ...style.input, ...propStyle }}
            placeholder={placeholder}
            onClick={onClick}
          />{' '}
          {`${label.toUpperCase()} ${
            touched && error ? `IS ${error.toUpperCase()}` : ''
          }`}
        </Label>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      {label ? (
        <Label
          style={touched && error ? style.labelError : style.label}
        >{`${label.toUpperCase()} ${
          touched && error ? `IS ${error.toUpperCase()}` : ''
        }`}</Label>
      ) : null}
      <Input
        {...input}
        type={type}
        style={{ ...style.input, ...propStyle }}
        placeholder={placeholder}
      >
        {children}
      </Input>
    </FormGroup>
  );
};

const Field = ({
  name,
  type,
  validate,
  component = Component,
  children,
  ...props
}) => {
  return (
    <Fragment>
      <ReduxField
        name={name}
        type={type}
        validate={validate}
        component={component}
        {...props}
      >
        {children}
      </ReduxField>
    </Fragment>
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
