import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Post } from "../types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345,
    margin: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={post.description}
        subheader={post.create_date}
      />
      {post.image && <CardMedia className={classes.media} image={post.image} />}
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          created_by: {post.created_by.username}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
