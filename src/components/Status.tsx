import React from "react";
import { Link, navigate } from "gatsby";
import { isLoggedIn, logout } from "../helpers/auth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  status: {
    background: "lightgrey",
    fontSize: "87.5%",
    padding: "0.25rem",
  },
  status__text: {
    margin: "0 auto",
    maxWidth: 640,
    textAlign: "right",
  },
}));

const Status = () => {
  const classes = useStyles();

  let details;
  if (!isLoggedIn()) {
    details = (
      <p className={classes.status__text}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </p>
    );
  } else {
    details = (
      <p className={classes.status__text}>
        Logged!
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            logout();
          }}
        >
          log out
        </a>
      </p>
    );
  }

  return <div className={classes.status}>{details}</div>;
};

export default Status;
