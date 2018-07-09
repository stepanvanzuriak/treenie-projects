import React from 'react'
import renderer from 'react-test-renderer'
import { BookCard } from './BookCard'

it('renders correctly', () => {
  const tree = renderer.create(<BookCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
