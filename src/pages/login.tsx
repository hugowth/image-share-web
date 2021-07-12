import React from "react";
import { useMutation } from "@apollo/client";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import LoginForm from "../components/LoginForm";
import View from "../components/View";
import { setUserToken } from "../helpers/auth";

import { USER_LOGIN } from "../graphql";
import getErrorMessage from "../helpers/getErrorMessage";

type Props = RouteComponentProps;

const Login = ({}: Props) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [login] = useMutation(USER_LOGIN);

  const handleSubmit = React.useCallback(
    async (values: any) => {
      setErrorMessage(null);
      try {
        const {
          data: { userLogin },
        } = await login({
          variables: { input: values },
        });
        await setUserToken(userLogin);
        navigate(`/app/gallery`);
      } catch (error) {
        const message = getErrorMessage(error);
        setErrorMessage(message);
      }
    },
    [login]
  );

  return (
    <View title="Log In">
      <LoginForm onSubmit={handleSubmit} />
      <>{errorMessage && errorMessage}</>
    </View>
  );
};

export default Login;
