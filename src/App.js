
import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";

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

import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div className="body">

      <MainNavbar />

      <MainFooter />

      <h1>Welcome to Build Week LinkedIn</h1>
      <RightSideBar />

    </div>
  );
}

export default App;
