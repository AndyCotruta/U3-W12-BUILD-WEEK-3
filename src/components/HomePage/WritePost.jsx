import { HiOutlinePhoto } from "react-icons/hi2";
import { BsPlayBtnFill } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import "./HomePage.css";
import { useSelector } from "react-redux";

const WritePost = () => {
  const myProfile = useSelector((state) => state.profiles.myProfile);
  return (
    <div className="mainContainerPost">
      <div className="d-flex">
        <img
          className="userPicturePost m-2, p-2 xs-profiles"
          src={myProfile.image}
          alt="userImg"
        />{" "}
        <button className="userPostBtn m-2, p-2">Start a post</button>
      </div>
      <div className="userPostIcons d-flex px-4">
        <span className="d-flex text-muted">
          <HiOutlinePhoto size={20} style={{ color: "#378fe9" }} />
          Photo
        </span>
        <span className="d-flex text-muted">
          <BsPlayBtnFill size={20} style={{ color: "#5f9b41" }} />
          Video
        </span>
        <span className="d-flex text-muted">
          <BsCalendar2Date size={20} style={{ color: "#c37d16" }} />
          Event
        </span>
        <span className="d-flex text-muted">
          <BiNews size={20} style={{ color: "#e16745" }} />
          Write article
        </span>
      </div>
    </div>
  );
};

export default WritePost;
