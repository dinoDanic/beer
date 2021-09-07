import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="wrap">
      <Container>
        <Row>
          <Col md="2">Select your beer</Col>
          <Col md="10">2</Col>
        </Row>
      </Container>
    </div>
  );
}
