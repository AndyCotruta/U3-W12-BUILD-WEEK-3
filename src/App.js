import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSideBar from "./components/RightSideBar";

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

          <MainNavbar />

          <MainFooter />

          <h1>Welcome to Build Week LinkedIn</h1>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
