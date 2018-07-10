import React from 'react'
import { compose, branch, renderComponent } from 'recompose'
import { Spinner } from '../../components/Spinner'

export const withLoading = compose(
  branch(({ loading }) => loading, renderComponent(() => <Spinner />))
)
