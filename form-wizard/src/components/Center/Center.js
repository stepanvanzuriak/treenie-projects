import React from 'react';
import PropTypes from 'prop-types';
import './Center.css';

const Center = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="Absolute-Center is-Responsive">{children}</div>
    </div>
  </div>
);

Center.defaultProps = {
  children: null
};
Center.propTypes = {
  children: PropTypes.node
};

export default Center;
