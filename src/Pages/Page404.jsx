import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import errorImage from "../Images/404.jpg";

function Page404() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <img src={errorImage} alt="Error" className="img-fluid" />
          <h1>Oops! Page not found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">
            <Button className="bg-dark text-white">Go to Homepage</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Page404;
