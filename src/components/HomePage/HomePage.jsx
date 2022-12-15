import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import { Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MY_PROFILE, fetchProfile } from "../../redux/actions/actions";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/me";
  const action = ADD_MY_PROFILE;
  const id = "";
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NGEyNzQwNWJkYTAwMTUwOTE4NDQiLCJpYXQiOjE2NzA5MjQ4MzksImV4cCI6MTY3MjEzNDQzOX0.x2Rft_8jW0eH4mFzHLq669IFCzGAFGCn7LuvHCf2udU";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  useEffect(() => {
    dispatch(fetchProfile(endPoint, options, id, action));
  }, []);

  return (
    <>
      {myProfile && (
        <>
          <LeftSidebar myProfileData={myProfile} />
          <Col>
            <MainPostsContainer />
          </Col>

          <Col>
            <RightSideBar />
          </Col>
        </>
      )}
    </>
  );
};

export default HomePage;
