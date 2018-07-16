import React from 'react';
import { Form } from 'reactstrap';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Congratulation from './Steps/Congratulation';

import Steps from '../../components/Steps';
import Step from '../../components/Step';
import { StepRouter } from '../../components/Steps/utils';

const steps = [
  {
    path: '/registration/step1',
    text: 'First step',
    fields: Step1
  },
  {
    path: '/registration/step2',
    text: 'Second step',
    fields: Step2
  },
  {
    path: '/registration/step3',
    text: 'Third step',
    fields: Step3
  },
  {
    path: '/registration/congratulation',
    component: Congratulation
  }
];

const Registration = ({ handleSubmit, ...props }) => {
  const stepRouters = new StepRouter();
  stepRouters.setRouters(steps, props => <Step {...props} />);

  return (
    <Form onSubmit={handleSubmit}>
      <Steps routers={stepRouters} {...props} />
    </Form>
  );
};

Registration.defaultProps = {
  handleSubmit: () => {}
};

Registration.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'Registration' })(Registration);
