import React from "react";
import renderer from "react-test-renderer";

import PostCard from "../PostCard";
import { Post, User } from "../../types";

describe("PostCard", () => {
  const user: User = {
    id: "1",
    username: "test",
  };
  const post: Post = {
    id: "1",
    created_by: user,
    create_date: "2021-07-10T06:08:21.506566Z",
    description: "test",
    image:
      "http://p37-env.eba-vvnpnaez.ap-southeast-1.elasticbeanstalk.com/upload/upload/signal-2021-03-16-225319_002.jpeg",
    update_date: "2021-07-10T06:08:21.506566Z",
  };
  it("renders correctly", () => {
    const tree = renderer.create(<PostCard post={post} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
