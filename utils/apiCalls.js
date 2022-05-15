import $http from "./api";
export const getRides = async () => {
  try {
    const rideResponse = await $http.get("/rides");
    console.log(rideResponse);
    if (rideResponse.status >= 300) {
      return;
    }
    return rideResponse.data;
  } catch (e) {
    throw e;
  }
};
export const getUserInfo = async () => {
  try {
    const userResponse = await $http.get("/user");
    console.log(userResponse);
    if (userResponse.status >= 300) {
      return;
    }
    return userResponse.data;
  } catch (e) {
    throw e;
  }
};
