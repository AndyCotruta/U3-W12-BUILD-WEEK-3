import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";

import { Col } from "react-bootstrap";

import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainPostsContainer = () => {
  const allPosts = useSelector((state) => state.posts.posts);

  return (
    <>
      <Col sm={12} md={9} lg={7}>
        <WritePost />
        <div className="d-flex align-items-center justify-content-between fs-14">
          <hr className="w-75"></hr>
          <span className="mx-2">
            Sort by: <span className="fw-800">Top</span>
          </span>
        </div>
        {allPosts.length !== 0 && allPosts.slice(Math.floor(Math.random(0, allPosts.length)), 20).map((post) => <PostsDisplay post={post} key={post._id} />)}
      </Col>
    </>
  );
};

export default MainPostsContainer;
