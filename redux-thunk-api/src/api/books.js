import { instance } from './client';

/**
 * Getting /Books data
 *
 * @returns {Promise}
 */
export const books = () => instance.get('/Books');

/**
 * Getting specific book from /Books
 *
 * @param {number} id  Book id
 * @returns {Promise}
 */
export const book = id => instance.get('/Books', { params: { ID: id } });
