import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import { Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ALL_POSTS,
  ADD_MY_PROFILE,
  fetchPosts,
  fetchProfile,
} from "../../redux/actions/actions";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profiles.myProfile);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="d-flex">
      {myProfile && (
        <>
          {" "}
          <LeftSidebar myProfileData={myProfile} />
          <MainPostsContainer />
          <RightSideBar />
        </>
      )}
    </div>
  );
};

export default HomePage;
