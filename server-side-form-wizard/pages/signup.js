import { Component, Fragment } from 'react';
import { reduxForm } from 'redux-form';
import StepLayout from '../components/StepLayout';
import { Form } from 'reactstrap';
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Finish from '../components/Steps/Finish';
import { connect } from 'react-redux';
import { validateDate } from '../validators/validators';

const steps = [
  {
    container: Step1
  },
  {
    container: Step2
  },
  {
    container: Finish
  }
];

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }
  next = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };

  back = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        {steps[this.state.currentStep].container({
          next: this.next,
          back: this.back,
          valid: this.props.valid,
          errors: this.props.syncErrors,
          values: this.props.values
        })}
      </Form>
    );
  }
}
//() => <StepLayout />;

SignUp = connect(({ form: { SignUp } }) => ({
  syncErrors: SignUp ? SignUp.syncErrors || null : null,
  values: SignUp ? SignUp.values || null : null
}))(SignUp);

export default reduxForm({
  form: 'SignUp',
  validate: values => {
    const errors = {};
    if (values.password !== values.password2) {
      errors.password2 = 'Must be same with password field';
    }

    if (validateDate(`${values.Day}/${values.Month}/${values.Year}`)) {
      errors.Day = validateDate(`${values.Day}/${values.Month}/${values.Year}`);
    }

    return errors;
  }
})(SignUp);
