export const ADD_ALL_PROFILES = "ADD_ALL_PROFILES";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";

export const fetchProfile = (endPoint, options) => {
  return async () => {
    let response = await fetch(endPoint, options);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NGEyNzQwNWJkYTAwMTUwOTE4NDQiLCJpYXQiOjE2NzA5MjQ4MzksImV4cCI6MTY3MjEzNDQzOX0.x2Rft_8jW0eH4mFzHLq669IFCzGAFGCn7LuvHCf2udU";
const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

export const getExperienceAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${endPoint}5fc4c2beed266800170ea3d4/experiences`,
        options
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("EXP DATA", data);
        dispatch({
          type: GET_EXPERIENCE,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_EXPERIENCE_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_EXPERIENCE_ERROR,
        payload: true,
      });
    }
  };
};
