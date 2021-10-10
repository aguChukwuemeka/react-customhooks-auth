import React, { useState } from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
// import firebase from "firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

export default function Login(props) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    isSubmitting,
    errors,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = useState(false);

  const authenticateUser =async()=> {
    const { name, email, password } = values;
    // const response = login
    //   ? await firebase.login(email, password)
    //   : await firebase.registar(name, email, password);
    // console.log({ response });
  }

  return (
    <div>
      <h2 className="mv3">{login ? "Create Account" : "Login Account"}</h2>
      <form onSubmit={handleSubmit} className="form">
        {login && (
          <div className="form-group mb-2">
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Your name"
              className="form-control"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
        )}
        {errors.name && <span className="error-text">{errors.name}</span>}
        <div className="form-group mb-2">
          <input
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            placeholder="Your email"
            className={`form-control ${errors.email && "error-input"}`}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        {errors.email && <span className="error-text">{errors.email}</span>}
        <div className="form-group mb-2">
          <input
            type="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            placeholder="Your password"
            className={`form-control ${errors.password && "error-input"}`}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}
        <div className="flex mt-3">
          <button
            type="submit"
            className="btn btn-sm btn-outline-info"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "#00C8F3", color: 'black' }}
          >
            {login ? "submit" : "login"}
          </button>
          <button
            type="button"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
            className="btn-sm btn-link border-0 ms-3"
          >
            {login ? "already have an account..." : "create an account..."}
          </button>
        </div>
      </form>
    </div>
  );
}
