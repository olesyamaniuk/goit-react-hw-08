import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import Button from "@mui/material/Button";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("This account already exists");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Username
          <Field type="text" name="name" />
        </label>
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
          Register
        </Button>
      </Form>
    </Formik>
  );
}