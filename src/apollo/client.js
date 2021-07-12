import fetch from "isomorphic-fetch";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { setContext } from "@apollo/client/link/context";
import { GATSBY_API_URL } from "../constants";

const createRestLink = () =>
  new RestLink({
    fetch,
    uri: GATSBY_API_URL,
    headers: { "content-type": "application/json" },
    bodySerializers: {
      multipartFormData: (data, headers) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });

        headers.delete("content-type");

        return {
          body: formData,
          headers,
        };
      },
    },
  });

const restLink = createRestLink();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const userToken = localStorage.getItem("gatsbyUser");

  const token = userToken ? JSON.parse(userToken) : {};

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token.access ? `Bearer ${token.access}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(restLink),
  cache: new InMemoryCache(),
});
