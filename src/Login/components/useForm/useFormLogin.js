import { useState, useEffect } from "react";

const useForm = (callBack, validate) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //handling errors
    setErrors(validate(values));
    setIsSubmitting(true);
    //callBack();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callBack();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
