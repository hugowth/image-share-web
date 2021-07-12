import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 650,
    margin: "2rem auto 3rem",
  },
}));

type Props = {
  title: string;
  children: React.ReactNode;
};

const View = ({ title, children }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default View;
