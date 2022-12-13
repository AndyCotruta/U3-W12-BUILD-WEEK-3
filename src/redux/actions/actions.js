export const ADD_ALL_PROFILES = "ADD_ALL_PROFILES";

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
