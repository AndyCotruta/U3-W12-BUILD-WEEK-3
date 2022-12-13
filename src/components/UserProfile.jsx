import Experience from "./Experience";
import Education from "./Education";
import Licenses from "./Licences";
import Skills from "./Skills";
import Languages from "./Languages";
import Interests from "./Interests";
import Activity from "./Activity";
import AboutUser from "./AboutUser";
import ProfileSection from "./ProfileSection";

const UserProfile = () => {
  return (
    <>
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
    </>
  );
};
export default UserProfile;
