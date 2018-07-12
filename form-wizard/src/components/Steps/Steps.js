import React, { Component } from 'react';
import StepRouter from '../StepRouter';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Step from '../Step';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.steps = new StepRouter(this.onBack, this.onNext);

    this.state = {
      pastSteps: [],
      currentStep: '/registration/step1'
    };

    props.steps.forEach(
      ({ path, component, text, next, back, fields, ...props }) => {
        this.steps.add({
          path,
          component: component
            ? component
            : () => (
                <Step
                  invalid={this.props.invalid}
                  text={text}
                  next={next}
                  back={back}
                  inner={fields}
                  {...props}
                />
              )
        });
      }
    );
  }

  onNext = step => {
    this.setState({
      currentStep: step,
      pastSteps: [...this.state.pastSteps, this.state.currentStep]
    });
  };

  onBack = step => {
    this.setState({
      currentStep: step,
      pastSteps: this.state.pastSteps.filter(pastStep => pastStep !== step)
    });
  };

  componentDidMount() {
    if (this.props.location.pathname !== this.state.currentStep) {
      this.props.history.replace(this.state.currentStep);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { history, location, last } = this.props;
    const { pastSteps, currentStep } = this.state;

    if (history.action === 'POP') {
      if (pastSteps.includes(location.pathname)) {
        this.onBack(location.pathname);
      } else {
        history.replace(currentStep);
      }
    }

    if (currentStep === last && pastSteps.length > 0) {
      this.setState({ pastSteps: [] });
    }
  }

  render() {
    const routers = this.steps.routers.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        render={() => <route.component {...route.props} />}
      />
    ));

    return routers;
  }
}

Steps.defaultProps = {
  steps: [],
  invalid: true
};

Steps.propTypes = {
  steps: PropTypes.array,
  invalid: PropTypes.bool
};

export default withRouter(Steps);
