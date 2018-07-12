import React from 'react';

import Field from '../../../components/Field';
import { required } from '../../../validators/validators';

const Step2 = () => (
  <Field name="email" type="email" label="Email" validate={[required]} />
);

export default Step2;
