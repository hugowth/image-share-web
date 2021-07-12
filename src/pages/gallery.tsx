import React, { useState, useCallback } from "react";
import View from "../components/View";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_POST, LIST_POST } from "../graphql";
import { Post } from "../types";
import PostCard from "../components/PostCard";
import PostCreateDialog from "../components/PostCreateDialog";
import { Button, Snackbar } from "@material-ui/core";
import getErrorMessage from "../helpers/getErrorMessage";
import { useDialog } from "../hooks";

const Gallery = () => {
  const { data, loading } = useQuery(LIST_POST);
  const [create] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: LIST_POST }],
    awaitRefetchQueries: true,
  });

  const { open, openDialog, closeDialog } = useDialog(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageInfo, setMessageInfo] = useState<string | undefined>(undefined);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = useCallback(
    async (values: any) => {
      try {
        await create({
          variables: { input: values },
        });
        closeDialog();
      } catch (error) {
        const message = getErrorMessage(error);
        setMessageInfo(message);
        setOpenSnackbar(true);
      }
    },
    [create, closeDialog]
  );

  if (loading) {
    return null;
  }

  return (
    <View title="List Post">
      <p>This Page is list the post</p>
      <Button color="secondary" onClick={openDialog}>
        Create Post
      </Button>
      {data.listPost.results.map((post: Post) => (
        <PostCard post={post} key={post.id} />
      ))}

      <PostCreateDialog
        open={open}
        onClose={closeDialog}
        onSubmit={handleSubmit}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        onClose={handleClose}
        autoHideDuration={5000}
        message={messageInfo}
      />
    </View>
  );
};

export default Gallery;
