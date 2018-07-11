import { compose, withHandlers as wHandlers } from 'recompose';
import { requestBooks } from '../../actions/actions';

const withHandlers = compose(
  wHandlers({
    onPrev: ({ currentPage, dispatch }) => () => dispatch(requestBooks(currentPage - 1)),
    onNext: ({ currentPage, dispatch }) => () => dispatch(requestBooks(currentPage + 1)),
  }),
);

export default withHandlers;
