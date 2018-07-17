import StepLayout from '../StepLayout';
import { Button, Row, Col } from 'reactstrap';

const Finish = props => (
  <StepLayout {...props} title="Finish" level={3} next={null} back={null}>
    <Row style={{ textAlign: 'center', color: 'green' }}>
      <Col />
      <Col>
        <i className="fas fa-check-circle fa-10x" />
      </Col>
      <Col />
    </Row>
    <Row style={{ marginTop: 30 }}>
      <Col />
      <Col style={{ textAlign: 'center' }}>
        <Button
          outline
          color="primary"
          onClick={() =>
            console.log({
              whereHear: props.values.whereHear,
              gender: props.values.sex,
              email: props.values.email,
              password: props.values.password,
              dob: `${props.values.Day}/${props.values.Month}/${
                props.values.Year
              }`
            })
          }
        >
          Go to Dashboard <i className="fas fa-arrow-right" />
        </Button>
      </Col>
      <Col />
    </Row>
  </StepLayout>
);

export default Finish;
