import { useLocation, Navigate } from "react-router-dom";

export const setToken = (token) => {
  localStorage.setItem("user_token", token); // make up your own token
};

export const fetchToken = (token) => {
  return localStorage.getItem("user_token");
};

export function RequireToken({ children }) {
  let auth = fetchToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export const logout = () => {
  localStorage.removeItem("user_token");
};
