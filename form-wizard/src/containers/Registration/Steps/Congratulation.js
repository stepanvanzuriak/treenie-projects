import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Congratulation = () => {
  return (
    <Container>
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbItem active>
              Congratulation
              <span role="img" aria-label="clap">
                👏
              </span>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Link to="/">
          <Button color="primary" block>
            Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Congratulation;
