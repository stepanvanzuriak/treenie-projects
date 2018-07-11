import React from 'react'
import { compose, branch, renderComponent } from 'recompose'
import { Error } from '../../components/Error'

export const withErrorHandler = compose(
  branch(
    ({ error }) => error,
    renderComponent(({ error }) => <Error text={error} />)
  )
)
