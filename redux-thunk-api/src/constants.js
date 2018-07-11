let {
  REACT_APP_MOCK_ENABLED: MOCK_ENABLE,
  REACT_APP_LOCAL_URL: LOCAL_URL
} = process.env

export const MOCK_URLS = {
  '/Books': `${LOCAL_URL}/mocks/Books.json`
}

MOCK_ENABLE = parseInt(MOCK_ENABLE, 10)

export { MOCK_ENABLE }
