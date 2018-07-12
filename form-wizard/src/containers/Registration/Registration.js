import React from 'react';

import { reduxForm } from 'redux-form';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

import Congratulation from './Steps/Congratulation';
import { Form } from 'reactstrap';
import Steps from '../../components/Steps';

const steps = [
  {
    path: '/registration/step1',
    text: 'First step',
    next: '/registration/step2',
    back: '/',
    fields: Step1
  },
  {
    path: '/registration/step2',
    text: 'Second step',
    next: '/registration/step3',
    back: '/registration/step1',
    fields: Step2
  },
  {
    path: '/registration/step3',
    text: 'Third step',
    next: '/registration/congratulation',
    back: '/registration/step2',
    fields: Step3
  },
  {
    path: '/registration/congratulation',
    component: Congratulation
  }
];

const Registration = ({ handleSubmit, invalid }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Steps
        steps={steps}
        invalid={invalid}
        last="/registration/congratulation"
      />
    </Form>
  );
};

export default reduxForm({ form: 'Registration' })(Registration);
