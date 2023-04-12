import jwt_decode from "jwt-decode";

const getCurrentUser = () => {
  const token =
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("access-token"));
  if (token) {
    return JSON.parse(localStorage.getItem("user"));
  }
};
const checkTokenExpirationMiddleware = () => {
  const token =
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("access-token"));
  if (!token || jwt_decode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    return false;
  }
  return true;
};

export { checkTokenExpirationMiddleware, getCurrentUser};
