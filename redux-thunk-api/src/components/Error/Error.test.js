import React from 'react'
import renderer from 'react-test-renderer'
import { Error } from './index'

it('renders correctly', () => {
  const tree = renderer.create(<Error />).toJSON()
  expect(tree).toMatchSnapshot()
})
