import { Tab, Tabs, Sonnet } from "react-bootstrap";
const Interests = () => {
  return (
    <div className="interests-section ">
      <h3 className="fs-20 fw-700">Interests</h3>
      <div className="skills-content d-flex-column">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Top Voices">
            <div>
              <h1>rteretree</h1>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Companies">
            <div>
              <h1>rteretree</h1>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Groups">
            <div>
              <h1>rteretreererererreree</h1>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Interests;
