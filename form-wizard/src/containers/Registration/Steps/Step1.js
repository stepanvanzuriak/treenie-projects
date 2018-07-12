import React, { Fragment } from 'react';

import Field from '../../../components/Field';
import { required } from '../../../validators/validators';

const Step1 = () => (
  <Fragment>
    <Field
      name="firstName"
      type="text"
      label="First name"
      validate={[required]}
    />
    <Field
      name="secondName"
      type="text"
      label="Second name"
      validate={[required]}
    />
  </Fragment>
);

export default Step1;
