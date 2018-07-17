import React from 'react';
import PropTypes from 'prop-types';

const Center = ({ children }) => (
  <div className="container">
    <style jsx>{`
      .Absolute-Center {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 10;
        right: 0;
      }

      .Absolute-Center.is-Responsive {
        width: 50%;
        height: 50%;
        min-width: 300px;
        max-width: 400px;
        padding: 40px;
      }
    `}</style>
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
