import getErrorMessage from "../getErrorMessage";
import { GraphQLError } from "graphql";
import { ApolloError } from "@apollo/client/errors";

describe("getErrorMessage", () => {
  it("can return error message", () => {
    const error: Error = {
      name: "test",
      message: "error",
    };
    expect(getErrorMessage(error)).toEqual("error");
  });

  it("can return GraphQL error message", () => {
    const error: Error = {
      name: "test",
      message: "error",
    };
    const graphQLError = new GraphQLError("GraphQL error");

    const apolloError: ApolloError = {
      graphQLErrors: [graphQLError],
      networkError: error,
      message: "error",
      extraInfo: "error",
      name: "test",
    };

    const a = getErrorMessage(apolloError);

    expect(getErrorMessage(apolloError)).toEqual(
      "[GraphQL error]: Message: GraphQL error"
    );
  });
});
