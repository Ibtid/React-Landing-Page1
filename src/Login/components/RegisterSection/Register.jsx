import React from "react";
import "../LoginRegister.scss";
import loginImg from "../../../login.svg";
import useForm from "../useForm/useFormRegister";
import validate from "../validate/validateRegister";

const Register = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Successfully");
  }

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            {errors.username && <p className="error">{errors.username}</p>}
            <input
              className={`${errors.username && "inputError"}`}
              text="text"
              name="usernme"
              placeholder="Username"
              values={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              className={`${errors.email && "inputError"}`}
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            {errors.password && <p className="error">{errors.password}</p>}
            <input
              className={`${errors.password && "inputError"}`}
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
