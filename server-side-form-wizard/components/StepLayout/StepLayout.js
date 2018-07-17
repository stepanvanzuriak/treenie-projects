import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';

const style = {
  container: {
    border: '1px solid #d8d8d8',
    borderRadius: 3,
    marginTop: 10,
    minHeight: 400,

    minWidth: 200,
    maxWidth: 350
  },
  title: {
    textAlign: 'center',
    color: '#007bff',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  progressCol: {
    height: 8,
    marginTop: 4,
    borderTop: '1px solid #d8d8d8',
    borderBottom: '1px solid #d8d8d8',
    marginBottom: 4
  },
  progressColFill: {
    backgroundColor: '#007bff'
  },
  hr: {
    margin: '30px -13px 13px',
    border: 0,
    borderTop: '1px solid #d8d8d8'
  },
  back: {
    color: 'gray'
  },
  childrenCol: {
    paddingTop: 10,
    minHeight: 270
    //maxHeight: 160
  }
};

const StepLayout = ({
  title,
  children,
  back = null,
  next = null,
  childrenStyle,
  level = 1,
  valid
}) => (
  <Container style={style.container}>
    <Row>
      <Col>
        <div style={style.title}>{title}</div>
        <Row style={style.progressRow}>
          <Col style={{ ...style.progressCol, ...style.progressColFill }} />
          <Col
            style={
              level > 1
                ? { ...style.progressCol, ...style.progressColFill }
                : { ...style.progressCol }
            }
          />
          <Col
            style={
              level > 2
                ? { ...style.progressCol, ...style.progressColFill }
                : { ...style.progressCol }
            }
          />
        </Row>
      </Col>
      <div className="w-100" />
      <Col style={style.childrenCol}>
        <div style={childrenStyle}>{children}</div>
      </Col>
      <div className="w-100" />
      <Col>
        <div style={style.controls}>
          {back || next ? <hr style={style.hr} /> : null}
          <Row>
            <Col>
              {back !== null ? (
                <Button color="link" block style={style.back} onClick={back}>
                  Back
                </Button>
              ) : null}
            </Col>
            <Col />
            <Col>
              {next !== null ? (
                <Button
                  color="link"
                  size="sm"
                  block
                  onClick={next}
                  disabled={!valid}
                >
                  Next <i className="fas fa-arrow-right" />
                </Button>
              ) : null}
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
);

export default StepLayout;
