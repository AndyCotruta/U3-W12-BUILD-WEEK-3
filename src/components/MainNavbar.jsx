import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-main">
      <Container fluid>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
          <BsLinkedin className="nav-li-icon" />
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>

        <Nav className="mr-auto">
          <Nav.Link href="#link">
            <div className="flex-direction-column align-items-center nav-icon">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
              >
                <path
                  d="M22 7V9H20V16C20 17.7 18.7 19 17 19H13V13H9V19H5C3.3 19 2 17.7 2 16V9H0V7L11 0L22 7Z"
                  fill="black"
                  fill-opacity="0.9"
                />
              </svg>
              <p>Home</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#link">My Network</Nav.Link>
          <Nav.Link href="#jobs">Jobs</Nav.Link>
          <Nav.Link href="#messaging">Messaging</Nav.Link>
          <Nav.Link href="#notifications">Notifications</Nav.Link>
          <NavDropdown title="Me" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              className="dropdown-main-action"
            >
              Profile Name
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.1.1"
              className="dropdown-secondary-action"
            >
              Profile Profession
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.1.2"
              className="dropdown-secondary-action"
            >
              <Button className="btn nav-view-profile-btn">View Profile</Button>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="#action/3.2"
              className="dropdown-main-action"
            >
              Account
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2.1"
              className="dropdown-secondary-action"
            >
              Try premium for free
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2.2"
              className="dropdown-secondary-action"
            >
              Settings & Privacy
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2.3"
              className="dropdown-secondary-action"
            >
              Help
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2.4"
              className="dropdown-secondary-action"
            >
              Language
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="#action/3.3"
              className="dropdown-main-action"
            >
              Manage
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.3.1"
              className="dropdown-secondary-action"
            >
              Posts & Activity
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.3.2"
              className="dropdown-secondary-action"
            >
              Job Posting Account
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Work" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              className="dropdown-main-action"
            ></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#premium" className="text-align-center">
            Try premium for <br />
            free!
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MainNavbar;
