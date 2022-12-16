import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainPostsContainer = () => {
  const allPosts = useSelector((state) => state.posts.posts);

  return (
    <>
      <WritePost />
      <div className="d-flex align-items-center justify-content-space-between">
        <hr className="w-75"></hr>
        <span className="mx-2">Sort by: Top</span>
      </div>
      {allPosts.length !== 0 &&
        allPosts
          .slice(Math.floor(Math.random(0, allPosts.length)), 20)
          .map((post) => <PostsDisplay post={post} key={post._id} />)}
    </>
  );
};

export default MainPostsContainer;
