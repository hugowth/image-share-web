import React from "react";
import renderer from "react-test-renderer";

import PostForm from "../PostForm";

describe("PostForm", () => {
  it("renders correctly", async () => {
    const onSubmit = jest.fn();
    const tree = renderer.create(<PostForm onSubmit={onSubmit} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
