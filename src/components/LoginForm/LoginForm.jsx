import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import Button from "@mui/material/Button";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((data) => {
        toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("Login to your account");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <Button
          style={{ width: "200px" }}
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          type="submit"
        >
          Log In
        </Button>
      </Form>
    </Formik>
  );
}