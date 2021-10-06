import React from 'react'

export default function validateLogin(values) {
  let errors = {};

    // Email Errors
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email='Invalid email address'
    }

    // Password Errors
    if (!values.password) {
      errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }
      return errors;
}


// export const LINKS_PER_PAGE = 5;

// export function getDomain(url) {
//   return url.replace(/^https?:\/\//i, "");
// }

/* EMAIL REGEX: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) */
/* URL REGEX: !/^(ftp|http|https):\/\/[^ "]+$/.test(values.url) */