import React, { Fragment } from 'react';
import Field from '../../../components/Field';
import { required } from '../../../validators/validators';

const Step3 = () => (
  <Fragment>
    <Field
      name="password"
      type="password"
      label="Password"
      validate={[required]}
    />
    <Field
      name="password2"
      type="password"
      label="Password again"
      validate={[required]}
    />
  </Fragment>
);

export default Step3;
