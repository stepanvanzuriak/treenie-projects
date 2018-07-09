import { chunks } from './utils'

test('Normal array dividing', () => {
  expect(chunks([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
})

test('Abnormal array dividing', () => {
  expect(chunks([1, 2, 3], 2)).toEqual([[1, 2], [3]])
  expect(chunks([], 10)).toEqual([])
  expect(chunks([1, 2, 3], 0)).toEqual([[1, 2, 3]])
})
