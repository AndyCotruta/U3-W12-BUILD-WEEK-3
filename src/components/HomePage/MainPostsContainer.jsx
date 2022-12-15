import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";

const MainPostsContainer = () => {
  return (
    <>
      <WritePost />
      <div className="d-flex align-items-center justify-content-space-between">
        <hr className="w-75"></hr>
        <span className="mx-2">Sort by: Top</span>
      </div>
      <PostsDisplay />
    </>
  );
};

export default MainPostsContainer;
