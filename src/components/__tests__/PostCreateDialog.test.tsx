import React from "react";
import renderer from "react-test-renderer";

import PostCreateDialog from "../PostCreateDialog";

describe("PostCreateDialog", () => {
  it("renders correctly", () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();
    const open = true;

    const tree = renderer
      .create(
        <PostCreateDialog open={open} onClose={onClose} onSubmit={onSubmit} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
