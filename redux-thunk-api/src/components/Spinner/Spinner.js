import React from 'react';
import { Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Spinner = () => (
  <Col style={{ textAlign: 'center', paddingTop: 50 }}>
    <FontAwesome name="spinner" size="3x" spin style={{ color: 'black' }} />
  </Col>
);

export default Spinner;
