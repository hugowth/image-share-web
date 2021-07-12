import React from "react";
import renderer from "react-test-renderer";

import LoginForm from "../LoginForm";

describe("LoginForm", () => {
  it("renders correctly", async () => {
    const onSubmit = jest.fn();
    const tree = renderer.create(<LoginForm onSubmit={onSubmit} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
