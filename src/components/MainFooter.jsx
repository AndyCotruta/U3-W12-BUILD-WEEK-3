import { Navbar, Col, Row, Container, NavItem, ListGroup, ListGroupItem, DropdownButton, Dropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap/esm";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import "./MainFooter.css";

const MainFooter = () => {
  return (
    <Row>
      <Col md={8}>
        <div className="footer-main">
          <div className="list-1">
            <div>About</div>
            <div>Community Guidelines</div>
            <div>Privacy & Terms</div>
            <div>Sales Solutions</div>
            <div>Safety Center</div>
          </div>
          <div className="grid grid--no-gutters grid--is-nested">
            <div>Accessibility</div>
            <div>Careers</div>
            <div>Ad Choices</div>
            <div>Mobile</div>
          </div>
          <div className="grid grid--no-gutters grid--is-nested">
            <div>Talent Solutions</div>
            <div>Marketing Solutions</div>
            <div>Advertising</div>
            <div>Small Business</div>
          </div>
          <ListGroup className="grid grid--no-gutters grid--is-nested">
            <div className="d-flex">
              <div>
                <BsQuestionCircleFill />
              </div>
              <div>
                <p className="m-0 pt-1">Questions?</p>
                <p>Visit our help center</p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <MdSettings />
              </div>
              <div>
                <p className="m-0 pt-1">Manage Your account and privacy</p>
                <p>Go to your settings</p>
              </div>
            </div>
          </ListGroup>
        </div>
      </Col>
      <Col md={4}>
        <ListGroup className="select-language">
          <p>Select language</p>

          <DropdownButton className="DropdownButton select-language-form " title="English">
            <Dropdown.Item eventKey="1">Polski</Dropdown.Item>
            <Dropdown.Item eventKey="2">Spanish</Dropdown.Item>
          </DropdownButton>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default MainFooter;
