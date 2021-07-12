import { isLoggedIn } from "../auth";

describe("isLoggedIn", () => {
  it("can extend list query", () => {
    expect(isLoggedIn()).toEqual(false);
  });
});
