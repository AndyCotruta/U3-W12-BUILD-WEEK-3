import { useDispatch } from "react-redux";

export const ADD_ALL_PROFILES = "ADD_ALL_PROFILES";
export const ADD_CLICKED_PROFILE = "ADD_CLICKED_PROFILE";

export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";

export const CHANGE_CLICKED_SEARCH_STATUS = "CHANGE_CLICKED_SEARCH_STATUS";
export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";
export const ADD_QUERY = "ADD_QUERY";

const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NGEyNzQwNWJkYTAwMTUwOTE4NDQiLCJpYXQiOjE2NzA5MjQ4MzksImV4cCI6MTY3MjEzNDQzOX0.x2Rft_8jW0eH4mFzHLq669IFCzGAFGCn7LuvHCf2udU";
const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

export const fetchProfile = (endPoint, options, id, action) => {
  console.log(`Fetching.... for id: ${id} and doing ${action} at ${endPoint}`);
  return async (dispatch) => {
    let response = await fetch(endPoint + id, options);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: action,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
