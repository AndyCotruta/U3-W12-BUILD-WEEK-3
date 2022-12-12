import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ProfileSection from "./components/ProfileSection";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ProfileSection />
          <About />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
