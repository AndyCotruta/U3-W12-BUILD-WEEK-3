import arrow from "../Icon/arrow.svg";
import endorsed from "../Icon/Network.svg";

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
        <div className="activity">
          <div className="activity-section">
            <h3 className="activity-title">Activity</h3>
            <span className="activity-followers">7874 followers</span>
            <p className="activity-status"> User hasn't posted lately</p>
            <p className="activity-info">User’s recent posts and comments will be displayed here.</p>
          </div>
          <div className="show-activity">
            Show all activity
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="experience">
          <div className="experience-section">
            <h3 className="activity-title">Experience</h3>
            <div className="experience-content">
              <div className="experience-logo">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1678924800&v=beta&t=odzOEdC0guAqvuVCim8HVjfOOqC4KwNoQmSMZQ69EPg" alt="" />
              </div>
              <div>
                <p className="bold-title">Full-stack Developer</p>
                <p className="font-14">EPICODE Global · Full-time</p>
                <span className="font-14">June 2020 </span>
                <span className="font-14"> · Present · </span>
                <span className="font-14">2 years 4 months </span>
                <p className="font-14">Location</p>
              </div>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="experience-section">
            <h3 className="activity-title">Education</h3>
            <div className="experience-content">
              <div className="experience-logo">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1678924800&v=beta&t=odzOEdC0guAqvuVCim8HVjfOOqC4KwNoQmSMZQ69EPg" alt="" />
              </div>
              <div>
                <p className="bold-title">Full-stack Developer</p>
                <p className="font-14">EPICODE Global · Full-time</p>
                <span className="font-14">June 2020 </span>
                <span className="font-14"> · Present · </span>
                <span className="font-14">2 years 4 months </span>
                <p className="font-14">Location</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Licenses">
          <div className="experience-section">
            <h3 className="activity-title">Licenses & certifications</h3>
            <div className="experience-content">
              <div className="experience-logo">
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1678924800&v=beta&t=g39mEwT0a4f25zx4YdClQnGd6q0Yb2ilFisuB3EPfng" alt="" />
              </div>
              <div>
                <p className="bold-title">React: Using TypeScriptReact</p>
                <p className="font-14">LinkedIn</p>
                <span className="font-14">Issued Aug 2020 </span>
                <span className="font-14"> No Expiration Date </span>
                <button className="gray-button show-credential">Show Credential</button>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="experience-section">
            <h3 className="activity-title">Skills</h3>
            <div className="skills-content d-flex-column">
              <div>
                <p className="bold-title">React.js</p>
              </div>
              <div className="skills-logo d-flex align-items-center mt-3 mb-3">
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1678924800&v=beta&t=g39mEwT0a4f25zx4YdClQnGd6q0Yb2ilFisuB3EPfng" alt="" />

                <p className="font-14">Endorsed by 3 colleagues at EPICODE</p>
              </div>
              <p className="font-14 d-flex align-items-end">
                <img src={endorsed} alt="" className="mr-2" /> 21 endorsements
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
