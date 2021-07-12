import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Box, Grid, TextField } from "@material-ui/core";
import { LoginPayload } from "../types";
import { object, string } from "yup";

type Props = {
  onSubmit: (values: LoginPayload) => Promise<void>;
};

const schema = object({
  username: string().required(),
  password: string().required(),
});

const LoginForm = ({ onSubmit }: Props) => {
  return (
    <div style={{ marginTop: 12 }}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {(formik) => {
          const { isSubmitting, isValid, errors, touched } = formik;
          const disabledField = isSubmitting;
          const disabledSubmmit = !isValid || isSubmitting;

          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    autoFocus
                    name="username"
                    label="User Name"
                    error={touched.username && Boolean(errors.username)}
                    helperText={errors.username}
                    disabled={disabledField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    autoFocus
                    name="password"
                    label="Password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                    disabled={disabledField}
                  />
                </Grid>
              </Grid>

              <Box my={2}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  disabled={disabledSubmmit}
                >
                  Login
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
