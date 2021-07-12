import React from "react";
import renderer from "react-test-renderer";

import Status from "../Status";

describe("Status", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Status />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
