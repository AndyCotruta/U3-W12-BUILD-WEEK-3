import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
