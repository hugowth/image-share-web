import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import PostForm from "./PostForm";

type CompanyEditDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: any) => Promise<void>;
};

const PostCreateDialog = ({
  open,
  onClose,
  onSubmit,
}: CompanyEditDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Post</DialogTitle>
      <DialogContent style={{ overflowY: "unset" }}>
        <PostForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default PostCreateDialog;
