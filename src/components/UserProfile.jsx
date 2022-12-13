import Experience from "./Experience";
import Education from "./Education";
import Licenses from "./Licences";
import Skills from "./Skills";
import Languages from "./Languages";
import Interests from "./Interests";
import Activity from "./Activity";
import AboutUser from "./AboutUser";
import ProfileSection from "./ProfileSection";
import { Col } from "react-bootstrap";
import RightSideBar from "./RightSideBar";
import MainFooter from "./MainFooter";

const UserProfile = () => {
  return (
    <>
      <Col md={8}>
        <ProfileSection />
        <div className="cards-main-container cd-width">
          <AboutUser />
          <div className="activity">
            <Activity />
          </div>
          <div className="experience cd cd-width ff">
            <Experience />
          </div>
          <div className="education cd cd-width ff">
            <Education />
          </div>
          <div className="Licenses cd cd-width ff">
            <Licenses />
          </div>
          <div className="skills cd cd-width ff">
            <Skills />
          </div>
          <div className="languages cd cd-width ff">
            <Languages />
          </div>
          <div className="interests cd cd-width ff">
            <Interests />
          </div>
        </div>
      </Col>
      <Col md={4}>
        <RightSideBar />
      </Col>
    </>
  );
};
export default UserProfile;
