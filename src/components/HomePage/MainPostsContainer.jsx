import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";

const MainPostsContainer = () => {
  return (
    <>
      <WritePost />
      <div>
        <hr></hr>
        <span>Sort by: Top</span>
      </div>
      <PostsDisplay />
    </>
  );
};

export default MainPostsContainer;
