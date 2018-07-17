import StepLayout from '../StepLayout';
import Field from '../Field';
import { required, email, same, minLength } from '../../validators/validators';
const minLength6 = minLength(6);
const Step1 = props => {
  return (
    <StepLayout {...props} title="Signup" level={1} back={null}>
      <Field
        name="email"
        type="email"
        label="Email"
        validate={[required, email]}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        validate={[required, minLength6]}
      />
      <Field
        name="password2"
        type="password"
        label="Confirm password"
        validate={[required, minLength6]}
      />
    </StepLayout>
  );
};

export default Step1;
