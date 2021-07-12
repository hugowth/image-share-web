import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Status from "./Status";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 0,
  },
}));

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Status />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
