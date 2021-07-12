import jwtDecode, { JwtPayload } from "jwt-decode";
import _ from "lodash";
import { navigate } from "gatsby";

const isBrowser = typeof window !== `undefined`;

export const getUserToken = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};

export const setUserToken = (tokens: { access?: string; refresh?: string }) =>
  (window.localStorage.gatsbyUser = JSON.stringify(tokens));

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const token = getUserToken();

  if (_.isEmpty(token)) {
    return false;
  }

  const decoded = jwtDecode<JwtPayload>(token.access);

  if (decoded.exp && decoded.exp * 1000 <= new Date().getTime()) {
    setUserToken({});
    return false;
  }

  return true;
};

export const logout = () => {
  if (!isBrowser) return;

  setUserToken({});
  navigate(`/app/login`);
};
