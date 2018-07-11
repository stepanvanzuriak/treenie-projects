import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const Error = ({ text }) => (
  <Alert color="danger">
    {text}
  </Alert>
);

Error.defaultProps = {
  text: '',
};

Error.propTypes = {
  text: PropTypes.string,
};

export default Error;
