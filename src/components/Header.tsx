import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rebeccapurple",
  },
  header__wrap: {
    alignItems: "baseline",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    margin: "0 auto",
    maxWidth: 640,
    padding: "1rem 0",
  },
  header__heading: {
    margin: 0,
    fontSize: "2rem",
  },
  header__nav: {
    fontSize: "1.25rem",
    marginTop: 0,
    textAlign: "right",
  },
  header__linkHome: {
    fontSize: "2rem",
    marginLeft: "-0.25rem",
  },
  header__link: {
    color: "white",
    fontWeight: "bold",
    marginLeft: " 0.75rem",
    marginTop: 0,
    padding: " 0.25rem",
    textDecoration: "none",
    "&:hover": {
      background: "white",
      color: "rebeccapurple",
    },
    "&:active": {
      background: "white",
      color: "rebeccapurple",
    },
    "&:focus": {
      background: "white",
      color: "rebeccapurple",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.header__wrap}>
        <h1 className={classes.header__heading}>
          <Link
            to="/"
            className={`${classes.header__link} ${classes.header__linkHome}`}
          >
            Demo Website
          </Link>
        </h1>
        <nav role="main" className={classes.header__nav}>
          <Link to="/" className={classes.header__link}>
            Home
          </Link>
          <Link to="/app/gallery" className={classes.header__link}>
            List View
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
