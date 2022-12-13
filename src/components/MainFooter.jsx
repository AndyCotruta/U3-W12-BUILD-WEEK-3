import {
  Navbar,
  Col,
  Row,
  Container,
  NavItem,
  ListGroup,
  ListGroupItem,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Nav } from "react-bootstrap/esm";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import "./MainFooter.css";

const MainFooter = () => {
  return (
    <Navbar fixed="bottom" className="footer-main">
      <Nav
        className="grid__col
            grid__col--12"
      >
        <ListGroup className="grid grid--no-gutters grid--is-nested">
          <ListGroupItem>About</ListGroupItem>
          <ListGroupItem>Community Guidelines</ListGroupItem>
          <ListGroupItem>Privacy & Terms</ListGroupItem>
          <ListGroupItem>Sales Solutions</ListGroupItem>
          <ListGroupItem>Safety Center</ListGroupItem>
        </ListGroup>
        <ListGroup className="grid grid--no-gutters grid--is-nested">
          <ListGroupItem>Accessibility</ListGroupItem>
          <ListGroupItem>Careers</ListGroupItem>
          <ListGroupItem>Ad Choices</ListGroupItem>
          <ListGroupItem>Mobile</ListGroupItem>
        </ListGroup>
        <ListGroup className="grid grid--no-gutters grid--is-nested">
          <ListGroupItem>Talent Solutions</ListGroupItem>
          <ListGroupItem>Marketing Solutions</ListGroupItem>
          <ListGroupItem>Advertising</ListGroupItem>
          <ListGroupItem>Small Business</ListGroupItem>
        </ListGroup>
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
        <ListGroup className="grid grid--no-gutters grid--is-nested">
          <p>Select language</p>
          <ListGroupItem>
            <DropdownButton className="DropdownButton" title="English">
              <Dropdown.Item eventKey="1">Polski</Dropdown.Item>
              <Dropdown.Item eventKey="2">Spanish</Dropdown.Item>
            </DropdownButton>
          </ListGroupItem>
        </ListGroup>
      </Nav>
    </Navbar>
  );
};

export default MainFooter;
