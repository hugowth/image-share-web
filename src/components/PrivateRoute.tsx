import React from "react";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import { isLoggedIn } from "../helpers/auth";

type Props = { component: React.ElementType } & RouteComponentProps;

const PrivateRoute = ({ component: Component, location, ...rest }: Props) => {
  if (!isLoggedIn() && location && location.pathname !== `/app/login`) {
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
