import { Col } from "react-bootstrap";
import "./LeftSidebar.css";
import premium from "../../Icon/Premium.svg";
import items from "../../Icon/items.svg";
import hashtag from "../../Icon/hashtag.svg";
import { propTypes } from "react-bootstrap/esm/Image";
const LeftSidebar = (props) => {
  return (
    <>
      <Col className="left-side-col" sm={12} md={3} lg={2}>
        <div className="left-profile-mini">
          <div className="profile-cover-mini">
            <img src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" alt="" />
            <div className="profile-picture-mini">
              <img src={props.myProfileData.image} alt="" />
            </div>
          </div>
          <div className="profile-text-area-mini">
            <div className="profile-text-mini">
              <p className="username-mini fs-16 fw-700 margin-0">
                {props.myProfileData.name} {props.myProfileData.surname}
              </p>
              <p className="user-role-mini fs-12">{props.myProfileData.title}</p>
            </div>
            <div className="profile-text-mini collapse-hide mt-3 align-items-start pl-2">
              <p className="username-mini fs-12 fw-700 margin-0">Achieve your goals faster</p>
              <p className="user-role-mini fs-12 fw-800 d-flex align-items-center mt-1">
                <img src={premium} alt="" style={{ width: "20px" }} className="mr-1" /> Upgrade your plan
              </p>
            </div>
            <div className="profile-text-mini2 collapse-hide  align-items-start pl-2">
              <p className="user-role-mini fs-12 fw-800 d-flex align-items-center mt-1">
                <img src={items} alt="" style={{ width: "13px" }} className="mr-1" /> My items
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 secondary-side-nav collapse-hide">
          <p className="ml-0 mb-2 fs-12">Recent</p>
          <div className="ml-2 fs-12 fw-800">
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" className="mr-2" style={{ width: "12px" }} /> Recent
            </p>
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" className="mr-2" style={{ width: "12px" }} /> Recent
            </p>
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" className="mr-2" style={{ width: "12px" }} /> Recent
            </p>
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" className="mr-2" style={{ width: "12px" }} /> Recent
            </p>
          </div>
        </div>
        <div className="profile-text-mini2 collapse-hide align-items-center">
          <p className="user-role-mini fs-12 fw-800 d-flex align-items-center mt-1">Discover more</p>
        </div>
      </Col>
    </>
  );
};

export default LeftSidebar;
