import like from "../../Icon/like.svg";
import comment from "../../Icon/chat.svg";
import repost from "../../Icon/share.svg";
import share from "../../Icon/Send 2.svg";

const PostsDisplay = (props) => {
  return (
    <>
      <div className="mainContainerPost mb-3">
        <div className="d-flex align-items-center p-3">
          <div>
            <img
              className="userPicturePost mr-3"
              src={props.post.user.image}
              alt="profile.name"
            />
          </div>
          <div>
            <span className="fs-14 fw-700 mr-2">
              {props.post.user.firstName}
            </span>
            <span className="fs-14 fw-700 mr-2">
              {props.post.user.lastName}
            </span>
            <div className="fs-12  ">{props.post.user.title}</div>
          </div>
        </div>

        <div className="post-content p-3 fs-14">
          <p>{props.post.text}</p>
        </div>

        <div style={{ height: "540px" }}>
          <img
            src={"https://picsum.photos/200" + props.i}
            alt="random-pic"
            className="w-100"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ marginBlockStart: "40px" }}>
          <div className="like-box-feed wrapper my-1 fs-14 fw-800 mx-3">
            <button
              aria-label="Add a photo"
              className="d-flex align-items-center justify-content-center share-box-btn  py-2 px-1 my-1 width-hover"
            >
              <img src={like} alt="" />
              <span className="share-box-btn-text  ml-2 fs-16">Like</span>
            </button>
            <button
              aria-label="Add a video"
              className="d-flex align-items-center justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
            >
              <img src={comment} alt="" />
              <span className="share-box-btn-text  ml-2 fs-16">Comment</span>
            </button>
            <button
              aria-label="Create an event"
              className="d-flex align-items-center  justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
            >
              <img src={repost} alt="" />
              <span className="share-box-feed-entry-toolbar__item-text  ml-2 fs-16">
                Repost
              </span>
            </button>
            <button
              aria-label="Write an article on LinkedIn"
              className="d-flex align-items-center justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
            >
              <img src={share} alt="" />
              <span className="share-box-feed-entry-toolbar__item-text ml-2 fs-16">
                Send
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsDisplay;
