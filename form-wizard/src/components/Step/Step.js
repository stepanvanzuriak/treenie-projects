import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Step = ({
  text,
  next,
  back,
  invalid,
  onBack,
  onNext,
  fields: Component
}) => {
  return (
    <Container>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>{text}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Component />
      <Row>
        {back ? (
          <Col>
            <Link to={back}>
              <Button block color="primary" onClick={() => onBack(back)}>
                Back
              </Button>
            </Link>{' '}
          </Col>
        ) : null}

        {next ? (
          <Col>
            <Link to={next}>
              <Button
                type="submit"
                block
                color="primary"
                disabled={invalid}
                onClick={() => onNext(next)}
              >
                Next
              </Button>
            </Link>{' '}
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

Step.defaultProps = {
  text: '',
  next: '',
  back: '',
  invalid: undefined,
  onBack: () => {},
  onNext: () => {},
  fields: () => <div />
};

Step.propTypes = {
  text: PropTypes.string,
  next: PropTypes.string,
  back: PropTypes.string,
  invalid: PropTypes.bool,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  fields: PropTypes.func
};

export default Step;
