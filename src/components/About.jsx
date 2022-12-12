import message from "../Icon/Send.svg";
import plus from "../Icon/Plus.svg";

const About = () => {
  return (
    <>
      <div className="cards-main-container">
        <div className="about-section">
          <div className="about-text">
            <h3 className="about-title">About</h3>
            <p className="about-content">
              Build skill-centered screening with the tech problems a developer would encounter on the job — and hire the team behind your next big idea. Build skill-centered screening with the tech
              problems a developer would encounter on the job — and hire the team behind your next big idea.
            </p>
          </div>
        </div>
        <div className="activity-section">
          <h3 className="activity-title">Activity</h3>
          <span className="activity-followers">7874 followers</span>
          <p className="activity-status"> User hasn't posted lately</p>
          <p className="activity-info">User’s recent posts and comments will be displayed here.</p>
        </div>
        <div className="show-activity">Show all activity</div>
      </div>
    </>
  );
};
export default About;
