import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import { Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";

const HomePage = () => {
  return (
    <>
      <LeftSidebar />

      <Col>
        <MainPostsContainer />
      </Col>

      <Col>
        <RightSideBar />
      </Col>
    </>
  );
};

export default HomePage;
