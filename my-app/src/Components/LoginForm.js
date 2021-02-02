
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as yup from "yup";
import FormSchema from "../validation/FormSchema";
import { useHistory } from "react-router-dom";

export default function LoginForm(props) {
  const { value, change, submit, errors } = props;

  const initialDisabled = true;
  const [loginValues, setLoginValues] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [disabled, setButtonDisabled] = useState(initialDisabled);

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const history = useHistory();
  const createNew = (e) => {
    history.push("/createNewUser");
  };


  const onLoginChange = (evt) => {
    /* potentially need to put checkboxes for user role options */
    const { userName, value } = evt.target;
    const valueToUse = value;
    change(userName, valueToUse);
  };


  const onChange = (userName, value) => {
    yup
      .reach(FormSchema, userName)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [userName]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [userName]: error.errors[0],
        });
      });


    setLoginValues({
      ...loginValues,
      [userName]: value,
    });
  };

  useEffect(() => {
    FormSchema.isValid(loginValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [loginValues]);

  return (
    <div>
      <h1>Welcome to Use My Tech!</h1>
      <h3>Returning? Please log-in below</h3>
      <h3>New to our website? Please create a new account</h3>
      <form className="login form container" onSubmit={onSubmit}>
        <div className="login submit">
          {/*DISABLE BUTTON */}
          <button name="submit new user" disabled={disabled}>
            Create Profile
          </button>

          <div className="errors">
            <div>{errors.name}</div>
          </div>
        </div>
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
            <option value="owner role">
              I want to make my equipment available to rent
            </option>
            <option value="renter role">
              I want to find equipment to rent
            </option>
          </select>
        </label>
      </form>
      <div>
        <button name="create new user button" onClick={createNew}>
          Create New User
        </button>
      </div>
    </div>
  );
}

