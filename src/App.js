import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UserProfile from "./components/UserProfile";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div className="body">
      <MainNavbar />
      <Container>
        <Row>
          <Col sm={12}>
            <UserProfile />
          </Col>

          <RightSideBar />
        </Row>
      </Container>
      <MainFooter />
    </div>
  );
}

export default App;
