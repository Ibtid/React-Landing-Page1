export default function validateLogin(values) {
  let errors = {};

  if (!values.username) {
    errors.username = "*Username is requires";
  }

  if (!values.password) {
    errors.password = "*Password is required";
  } else if (values.password.length < 5) {
    errors.password = "*Password needs to be atleast 5 characters";
  }

  return errors;
}
