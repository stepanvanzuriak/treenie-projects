import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import Spinner from '../../components/Spinner';

const withLoading = compose(
  branch(({ loading }) => loading, renderComponent(() => <Spinner />)),
);

export default withLoading;
