import React, { useState } from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";

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
  } = useFormValidation(INITIAL_STATE, validateLogin);
  const [login, setLogin] = useState(false);
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
              onBlur={handleBlur}
              placeholder="Your name"
              className={`form-control ${errors.name && "error-input"}`}
              autoComplete="off"
              onChange={handleChange}
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
        <div className="flex mt3">
          <button
            type="submit"
            className="btn btn-sm btn-outline-success"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            {login ? "submit" : "login"}
          </button>
          <button
            type="button"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
            className="btn-sm btn border-0 ms-3"
          >
            {login ? "already have an account..." : "create an account"}
          </button>
        </div>
      </form>
    </div>
  );
}
