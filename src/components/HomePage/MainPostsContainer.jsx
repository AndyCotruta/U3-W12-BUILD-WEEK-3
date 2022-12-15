import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";
import { Col } from "react-bootstrap";

const MainPostsContainer = () => {
  return (
    <>
      <Col>
        <WritePost />
        <div className="d-flex align-items-center justify-content-between fs-14">
          <hr className="w-75"></hr>
          <span className="mx-2">
            Sort by: <span className="fw-800">Top</span>
          </span>
        </div>
        <PostsDisplay />
      </Col>
    </>
  );
};

export default MainPostsContainer;
