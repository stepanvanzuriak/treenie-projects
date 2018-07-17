import Link from 'next/link';
import Center from '../components/Center';
import { Container, Button, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  container: {
    border: '1px solid #d8d8d8',
    borderRadius: 3,
    minHeight: 210,
    minWidth: 300,
    maxWidth: 400
  },
  title: {
    textAlign: 'center',
    fontSize: 24
  },
  signup: {
    paddingTop: 40
  }
};

const Index = () => (
  <Center>
    <Container style={style.container}>
      <div style={style.signup}>
        <p style={style.title}>Dashboard</p>
        <Row>
          <Col>
            <Link href="/signup">
              <Button color="primary" block>
                Signup
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  </Center>
);

export default Index;
