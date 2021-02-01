import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as yup from 'yup'
import FormSchema from '../validation/FormSchema'

export default loginForm() {


const [loginValues, setLoginValues] = useState("")
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setButtonDisabled] = useState(initialDisabled)


 //validation useEffect
 const inputChange = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrderInfo = {
      userName: formValues.userName.trim(),
      password: formValues.password.trim(),
      userRole: formValues.userRole
    };
  };

  return (
    <div>
        <h1>Welcome!</h1>
        <h3>Returning? Please log-in below</h3>
        <h3>New to our website? Please create a new account</h3>
        <form>
            <label className="username input">
                <input 
                name="username"
                type="text"
                value={loginValues.userName}
                onChange={onChange}
                />
            </label>
            <label className="password input">
                <input 
                name="password"
                type="text"
                value={loginValues.password}
                onChange={onChange}
                />
            </label>
            <label className="user role">
                <select>
                    <option value="">Select an option</option>
                    <option value="owner role">I want to make my equipment available to rent</option>
                    <option value="renter role">I want to find equipment to rent</option>
                </select>
            </label>
        </form>
    </div>
  )
}
