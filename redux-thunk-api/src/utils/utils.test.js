import { chunks } from './utils'

test('Normal array dividing', () => {
  expect(chunks([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
})

test('Abnormal array dividing', () => {
  expect(chunks([1, 2, 3], 2)).toEqual([[1, 2], [3]])
  expect(chunks([1, 2, 3], 0)).toEqual([1, 2, 3])
  expect(chunks([1, 2, 3], 1)).toEqual([[1], [2], [3]])
})

test('Without array', () => {
  expect(chunks(null, 15)).toEqual([])
  expect(chunks(undefined, 15)).toEqual([])
})

test('Without size', () => {
  expect(chunks([1, 2, 3])).toEqual([1, 2, 3])
  expect(chunks([1, 2, 3], null)).toEqual([1, 2, 3])
  expect(chunks([1, 2, 3], undefined)).toEqual([1, 2, 3])
})
