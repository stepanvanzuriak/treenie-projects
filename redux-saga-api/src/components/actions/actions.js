import {
  OPEN_BOOK,
  OPEN_MAIN_PAGE,
  NEXT_MAIN_PAGE,
  PREV_MAIN_PAGE,
  GET_BOOK,
  GET_BOOKS
} from './actionTypes'

export const openBookPage = () => ({ type: OPEN_BOOK })
export const openMainPage = () => ({ type: OPEN_MAIN_PAGE })
export const nextMainPage = () => ({ type: NEXT_MAIN_PAGE })
export const prevMainPage = () => ({ type: PREV_MAIN_PAGE })

export const getBook = id => ({ type: GET_BOOK, id })
export const getBooksList = () => ({ type: GET_BOOKS })
