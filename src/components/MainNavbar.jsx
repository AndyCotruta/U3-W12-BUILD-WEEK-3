import { Navbar, Nav, NavDropdown, FormControl, Form, Button, Container } from "react-bootstrap";
import "./MainNavbar.css";
import logomini from "../Icon/Logo-nav.svg";
import home from "../Icon/Home.svg";
import mynetwork from "../Icon/myNetwork.svg";
import jobs from "../Icon/jobs.svg";
import message from "../Icon/Message.svg";
import notification from "../Icon/notification.svg";
import work from "../Icon/work.svg";
import { useNavigate } from "react-router-dom";
import SearchModel from "./SearchModel";

const MainNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="navbar-main">
      <Container className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="logo-mini">
            <img src={logomini} alt="" />
          </div>
          <Form inline className="search-position">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
            <div className="search-model ">
              <SearchModel />
            </div>
          </Form>
        </div>

        <div>
          <Nav className="mr-auto d-flex align-items-center">
            <Nav.Link className="p-0">
              <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                <div>
                  <img src={home} alt="" className="nav-menu-icon" />
                </div>
                <p className="fs-12 nav-text">Home</p>
              </div>
            </Nav.Link>
            <Nav.Link className="p-0">
              <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                <div>
                  <img src={mynetwork} alt="" className="nav-menu-icon" />
                </div>
                <p className="fs-12 nav-text">My Network</p>
              </div>
            </Nav.Link>
            <Nav.Link className="p-0">
              <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                <div>
                  <img src={jobs} alt="" className="nav-menu-icon" />
                </div>
                <p className="fs-12 nav-text">Jobs</p>
              </div>
            </Nav.Link>
            <Nav.Link className="p-0">
              <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                <div>
                  <img src={message} alt="" className="nav-menu-icon" />
                </div>
                <p className="fs-12 nav-text">Messaging</p>
              </div>
            </Nav.Link>
            <Nav.Link className="p-0">
              <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                <div>
                  <img src={notification} alt="" className="nav-menu-icon" />
                </div>
                <p className="fs-12 nav-text">Notifications</p>
              </div>
            </Nav.Link>
            <div className="profile-drop-down menu-size">
              <img src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" alt="" className="profile-icon" />
              <NavDropdown title="Me" id="basic-nav-dropdown" className="profile-name">
                <NavDropdown.Item href="#action/3.1" className="dropdown-main-action d-flex align-items-center">
                  <span>
                    <img src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" alt="" className="profile-icon2 mr-2" />
                  </span>
                  <div style={{ color: "black" }}>
                    <p className="fs-16 fw-700">User Name</p>
                    <p className="fs-14 ">IT Specialist</p>
                  </div>
                </NavDropdown.Item>
                <div href="#action/3.1.2" className="dropdown-secondary-action d-flex justify-content-center mt-2 mb-2">
                  <Button
                    className="btn nav-view-profile-btn fs-14"
                    onClick={() => {
                      navigate("/profile/1234");
                    }}
                  >
                    View Profile
                  </Button>
                </div>
                <NavDropdown.Divider />
                <div href="#action/3.2" className="dropdown-main-action fs-16 fw-800 ml-4">
                  Account
                </div>
                <NavDropdown.Item href="#action/3.2.1" className="dropdown-secondary-action fs-14">
                  Try premium for free
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2.2" className="dropdown-secondary-action fs-14">
                  Settings & Privacy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2.3" className="dropdown-secondary-action fs-14">
                  Help
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2.4" className="dropdown-secondary-action fs-14">
                  Language
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <div href="#action/3.3" className="dropdown-main-action fs-16 fw-800 ml-4">
                  Manage
                </div>
                <NavDropdown.Item href="#action/3.3.1" className="dropdown-secondary-action fs-14">
                  Posts & Activity
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3.2" className="dropdown-secondary-action fs-14">
                  Job Posting Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="fs-14">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="profile-drop-down menu-size work">
              <img src={work} alt="" className="nav-menu-icon" />
              <NavDropdown title="Work" id="basic-nav-dropdown" className="profile-name "></NavDropdown>
            </div>
            <Nav.Link href="#premium" className="text-align-center ">
              <p className="fs-14 fw-700 premium">Try premium for free!</p>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
export default MainNavbar;
