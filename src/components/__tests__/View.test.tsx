import React from "react";
import renderer from "react-test-renderer";

import View from "../View";

describe("View", () => {
  it("renders correctly", () => {
    const title = "title";

    const tree = renderer
      .create(
        <View title={title}>
          <></>
        </View>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
