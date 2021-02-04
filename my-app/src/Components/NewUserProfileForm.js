import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import FormSchema from "../validation/FormSchema";
import axios from "axios";

const initialNewUserFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  userRole: "",
};
const initialNewUserFormErrors = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  userRole: "",
};

const initialNewUserDisabled = true;

export default function NewUserForm() {
  const [newUserFormValues, setNewUserFormValues] = useState(
    initialNewUserFormValues
  );
  const [newUserFormErrors, setNewUserFormErrors] = useState(
    initialNewUserFormErrors
  );
  const [newUserDisabled, setNewUserButtonDisabled] = useState(
    initialNewUserDisabled
  );

  const history = useHistory();
  const newUserRouteToHome = () => {
    history.push("/");
  };

  const postNewUserInfo = (newUserInfo) => {
    axios
      .post("", newUserInfo)
      .then((res) => {
        setNewUserFormValues(initialNewUserFormValues);
      })
      .catch((error) => {
        console.log("there was an error ", error);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    newUserSubmit();
    newUserRouteToHome();
  };

  const newUserSubmit = () => {
    const newProfile = {
      firstName: newUserFormValues.firstName.trim(),
      lastName: newUserFormValues.lastName.trim(),
      username: newUserFormValues.username.trim(),
      password: newUserFormValues.password.trim(),
      userRole: newUserFormValues.userRole,
    };
    postNewUserInfo(newProfile);
  };

  //validation useEffect
  const inputChange = (event) => {
    const { name, value } = event;
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => {
        setNewUserFormErrors({
          ...newUserFormErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setNewUserFormErrors({
          ...newUserFormErrors,
          [name]: error.errors[0],
        });
      });

    setNewUserFormValues({
      ...newUserFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    FormSchema.isValid(newUserFormValues).then((valid) => {
      setNewUserButtonDisabled(!valid);
    });
  }, [newUserFormValues]);

  return (
    <form
      className="new user form container"
      disabled={newUserDisabled}
      onSubmit={onSubmit}
    >
      <div className="new user form submit">
        <h2>New Profile</h2>
        <p>Please fill out the information below</p>

        {/*DISABLE BUTTON */}
        <button name="submit new user" disabled={newUserDisabled}>
          Create Profile
        </button>
      </div>

      <div className="form inputs">
        <h4>General information</h4>

        <label>
          First Name
          <input
            value={newUserFormValues.firstName}
            onChange={inputChange}
            name="first name"
            type="text"
          />
        </label>

        <label>
          Last Name
          <input
            value={newUserFormValues.lastName}
            onChange={inputChange}
            name="last name"
            type="text"
          />
        </label>

        <label>
          Role
          <select
            onChange={inputChange}
            value={newUserFormValues.role}
            name="role"
          >
            <option value="">- Select an option -</option>
            <option value="owner">
              Owner - I want to make my equipment available to rent
            </option>
            <option value="renter">
              Renter - I want find available equipment to rent
            </option>
          </select>
        </label>

        <label>
          Username
          <input
            type="text"
            name="username"
            value={newUserFormValues.username}
            onChange={inputChange}
          />
        </label>

        <label>
          Password
          <input
            type="text"
            name="password"
            value={newUserFormValues.password}
            onChange={inputChange}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            name="email"
            value={newUserFormValues.email}
            onChange={inputChange}
          />
        </label>
      </div>
    </form>
  );


}


