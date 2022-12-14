import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import { Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ALL_POSTS,
  ADD_MY_PROFILE,
  fetchProfile,
} from "../../redux/actions/actions";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profiles.myProfile);

  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/me";
  const action = ADD_MY_PROFILE;
  const id = "";
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  const postsEndPoint = "https://striveschool-api.herokuapp.com/api/posts/ ";
  const postAction = ADD_ALL_POSTS;

  useEffect(() => {
    dispatch(fetchProfile(endPoint, options, id, action));
    dispatch(fetchProfile(postsEndPoint, options, id, postAction));
  }, []);

  return (
    <>
      {myProfile && (
        <>
          <LeftSidebar myProfileData={myProfile} />

          <MainPostsContainer />

          <RightSideBar />
        </>
      )}
    </>
  );
};

export default HomePage;
