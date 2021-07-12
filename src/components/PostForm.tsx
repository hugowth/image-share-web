import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Box, Grid, TextField } from "@material-ui/core";
import { PostPayload } from "../types";
import { object, string, mixed } from "yup";

type Props = {
  onSubmit: (values: PostPayload) => Promise<void>;
};

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const schema = object({
  image: mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  description: string().required(),
});

const PostForm = ({ onSubmit }: Props) => {
  const fileInput = React.createRef();
  return (
    <>
      <Formik
        initialValues={{ image: undefined, description: "" }}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {(formik) => {
          const { isSubmitting, isValid, errors, touched, setFieldValue } =
            formik;
          const disabledField = isSubmitting;
          const disabledSubmmit = !isValid || isSubmitting;

          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => {
                      // @ts-ignore
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                    // @ts-ignore
                    ref={fileInput}
                  />

                  <button
                    type="button"
                    // @ts-ignore
                    onClick={() => fileInput.current.click()}
                  >
                    Choose file
                  </button>
                  <>{errors.image && errors.image}</>
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    autoFocus
                    name="description"
                    label="description"
                    error={touched.description && Boolean(errors.description)}
                    helperText={errors.description}
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
                  Submit
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default PostForm;
