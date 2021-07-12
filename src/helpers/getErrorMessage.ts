import { ApolloError } from "@apollo/client/errors";

export const getApolloErrorMessage = ({
  graphQLErrors,
  networkError,
  message,
}: ApolloError): string => {
  if (graphQLErrors.length > 0) {
    return graphQLErrors.reduce(
      (prev, { message }) => prev + `[GraphQL error]: Message: ${message}`,
      ""
    );
  }

  if (networkError && "result" in networkError) {
    const { result } = networkError;
    return `${JSON.stringify(result)}`;
  }

  return message;
};

const getErrorMessage = (err: ApolloError | Error): string => {
  if ("graphQLErrors" in err) {
    return getApolloErrorMessage(err);
  }

  return err.message;
};

export default getErrorMessage;
