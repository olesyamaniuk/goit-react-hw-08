import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";
import { selectAllContacts } from "../../redux/contacts/selectors";
import Button from "@mui/material/Button";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters!!!")
    .max(50, "Max 50 characters!!!")
    .required("Is required!!!"),
  number: Yup.string()
    .min(3, "Min 3 characters!!!")
    .max(50, "Max 50 characters!!!")
    .required("Is required!!!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const checkContactExists = (contacts, name) => {
    return contacts.some((el) => el.name.toLowerCase() === name.toLowerCase());
  };
  const handleSubmit = (values, actions) => {
    if (checkContactExists(contacts, values.name)) {
      toast.error("This contact already exists");
      return;
    }
    dispatch(addContact(values))
      .unwrap()
      .then((data) => {
        toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("Failed to add contac");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form >
        <div>
          <label htmlFor="name">
            Name
          </label>
          <Field
            name="name"
            id="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor="number">
            Number
          </label>
          <Field
            name="number"
            id="number"
            placeholder="Enter number"
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 1, mb: 1 }}
        >
          Add Contact
        </Button>
      </Form>
    </Formik>
  );
}