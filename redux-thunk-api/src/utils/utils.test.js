import { chunks, formatBook } from './utils';

test('Normal array dividing', () => {
  expect(chunks([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
});

test('Abnormal array dividing', () => {
  expect(chunks([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  expect(chunks([1, 2, 3], 0)).toEqual([1, 2, 3]);
  expect(chunks([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
});

test('Without array', () => {
  expect(chunks(null, 15)).toEqual([]);
  expect(chunks(undefined, 15)).toEqual([]);
});

test('Without size', () => {
  expect(chunks([1, 2, 3])).toEqual([1, 2, 3]);
  expect(chunks([1, 2, 3], null)).toEqual([1, 2, 3]);
  expect(chunks([1, 2, 3], undefined)).toEqual([1, 2, 3]);
});

test('Normal book formating', () => {
  expect(
    formatBook({
      ID: 1,
      Title: 'Book 1',
      Description: 'Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.',
      PageCount: 100,
      Excerpt:
        'Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.',
      PublishDate: '2018-07-08T14:41:49.8522461+00:00',
    }),
  ).toEqual({
    Description: 'Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.',
    Excerpt:
      'Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem',
    ID: 1,
    PageCount: 100,
    PublishDate: '07/08/2018',
    Title: 'Book 1',
  });
});
