import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/registration">
            <Button block color="primary">
              Registration
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
