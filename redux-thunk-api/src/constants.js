const { REACT_APP_MOCK_ENABLED, REACT_APP_LOCAL_URL: LOCAL_URL } = process.env;

export const MOCK_URLS = {
  '/Books': `${LOCAL_URL}/mocks/Books.json`,
};

export const MOCK_ENABLE = parseInt(REACT_APP_MOCK_ENABLED, 10);
