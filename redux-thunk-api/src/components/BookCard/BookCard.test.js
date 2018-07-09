import React from 'react'
import renderer from 'react-test-renderer'
import { BookCard } from './index'

it('renders correctly', () => {
  const tree = renderer.create(<BookCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
