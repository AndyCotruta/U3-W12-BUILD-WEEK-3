import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import { Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";

const HomePage = () => {
  return (
    <>
      <Col sm={12} md={6} lg={2}>
        <div>
          <LeftSidebar />
        </div>
      </Col>
      <Col sm={12} md={6} lg={6}>
        <MainPostsContainer />
      </Col>

      <Col sm={12} md={6} lg={4}>
        <RightSideBar />
      </Col>
    </>
  );
};

export default HomePage;
