import React, { useState, useEffect } from "react";
import * as yup from "yup";
import FormSchema from "../validation/FormSchema";
import { useHistory } from "react-router-dom";

export default function LoginForm(props) {
  const { errors } = props;

  const initialDisabled = true;
  const [loginValues, setLoginValues] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [disabled, setButtonDisabled] = useState(initialDisabled);

  const onSubmit = (evt) => {
    evt.preventDefault();
    loginValues.role === "owner"
      ? history.push("/owner")
      : history.push("/renter");
  };

  const history = useHistory();
  const createNew = (e) => {
    history.push("/createNewUser");
  };

  const onChange = (name, value) => {
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

    setLoginValues({
      ...loginValues,
      [name]: value,
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
            <div>{errors}</div>
          </div>
        </div>
        <label for="username" className="username input">
          Username
        </label>
        <input
          name="username"
          type="text"
          value={loginValues.userName}
          onChange={onChange}
        />

        <label for="password" className="password input">
          Password{" "}
        </label>
        <input
          name="password"
          type="text"
          value={loginValues.password}
          onChange={onChange}
        />

        <label for="role" className="user role">
          Select role
        </label>
        <select name="role">
          <option value="">Select an option</option>
          <option value="owner">
            I want to make my equipment available to rent
          </option>
          <option value="renter">I want to find equipment to rent</option>
        </select>
      </form>
      <div>
        <button name="create new user button" onClick={createNew}>
          Create New User
        </button>
      </div>
    </div>
  );
}
