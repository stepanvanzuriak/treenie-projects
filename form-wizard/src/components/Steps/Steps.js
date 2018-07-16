import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.router = this.props.stepRouters;
  }

  onNext = step => {
    this.router.setPastSteps([...this.router.pastSteps, this.router.current]);
    this.router.setCurrent(step);
  };

  onBack = step => {
    this.router.setPastSteps(
      this.router.pastSteps.filter(pastStep => pastStep !== step)
    );
    this.router.setCurrent(step);
  };

  componentDidMount() {
    if (!this.router.isCurrent(this.props.location.pathname)) {
      this.props.history.replace(this.router.current);
    }
  }

  componentDidUpdate() {
    const { history, location } = this.props;
    const { pastSteps, current } = this.router;

    if (history.action === 'POP') {
      if (pastSteps.includes(location.pathname)) {
        this.onBack(location.pathname);
      } else {
        history.replace(current);
      }
    }

    if (this.router.isLast(current) && pastSteps.length > 0) {
      this.router.setPastSteps([]);
    }
  }

  render() {
    return this.router.routers.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        render={() => (
          <route.component
            onBack={this.onBack}
            onNext={this.onNext}
            invalid={this.props.invalid}
            {...route.props}
          />
        )}
      />
    ));
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
