import { gql } from "@apollo/client";

export const LIST_POST = gql`
  query ListPost {
    listPost @rest(type: [post], path: "/post/") {
      __typename
      count
      next
      results
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost {
    createPost(input: $input)
      @rest(
        path: "/post/"
        method: "POST"
        bodySerializer: "multipartFormData"
      ) {
      __typename
      id
      created_by
      create_date
      description
      image
      update_date
    }
  }
`;
