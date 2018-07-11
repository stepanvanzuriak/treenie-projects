import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import Error from '../../components/Error';

const withErrorHandler = compose(
  branch(
    ({ error }) => error,
    renderComponent(({ error }) => <Error text={error} />),
  ),
);

export default withErrorHandler;
