import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation UserLogin {
    userLogin(input: $input) @rest(path: "/user/login", method: "POST") {
      __typename
      access
      refresh
    }
  }
`;

export const USER_REFRESH_TOKON = gql`
  mutation UserRefreshToken {
    userRefreshToken
      @rest(type: "User", path: "/user/login/refresh", method: "POST") {
      __typename
      refresh
    }
  }
`;
