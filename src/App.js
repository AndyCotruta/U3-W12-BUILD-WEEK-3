import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UserProfile from "./components/UserProfile";
import RightSideBar from "./components/RightSideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar />
        <Container>
          <Row>
            <Routes>
              <Route path="/profile/:userId" element={<UserProfile />} />
            </Routes>
          </Row>
          <MainFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
