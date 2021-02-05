import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import FormSchema from "../validation/FormSchema";
import axios from "axios";
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import styled from "styled-components";
import banner from "../images/banner.jpg";

const initialNewUserFormValues = {
  username: "",
  password: "",
  email: "",
  birthday: "",
  // userRole: "",
};
const initialNewUserFormErrors = {
  username: "",
  password: "",
  birthday: "",
  email: "",
  // userRole: "",
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

   //validation useEffect
   const inputChange = (e) => {
    // const { name, value } = event;
    yup
      .reach(FormSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setNewUserFormErrors({
          ...newUserFormErrors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setNewUserFormErrors({
          ...newUserFormErrors,
          [e.target.name]: error.errors[0],
        });
      });

    setNewUserFormValues({
      ...newUserFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const postNewUserInfo = (newUserInfo) => {
    axiosWithAuth()
      .post("https://use-my-techstuff.herokuapp.com/api/auth/register", newUserInfo)
      .then((res) => {
        console.log(res
          );
        
        history.push("/");
        
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
      username: newUserFormValues.username.trim(),
      password: newUserFormValues.password.trim(),
      birthday: newUserFormValues.birthday.trim(),
      email: newUserFormValues.email.trim(),
      // userRole: newUserFormValues.userRole,
    };
    postNewUserInfo(newProfile);
  };


  useEffect(() => {
    FormSchema.isValid(newUserFormValues).then((valid) => {
      setNewUserButtonDisabled(!valid);
    });
  }, [newUserFormValues]);

  return (
    <div>
      <div name="banner">
        <img src={banner} alt="circuit board"></img>
      </div>
      <StyledNewUserForm className="newuser">
        <form
          className="new user form container"
          disabled={newUserDisabled}
          onSubmit={onSubmit}
        >
          <div className="new user form submit">
            <h1>New Profile</h1>
            <p>Please fill out the information below</p>
          </div>

          <div className="form inputs">
            <h2>General information</h2>

            <label>
              Birthday
              <input
                value={newUserFormValues.birthday}
                onChange={inputChange}
                name="birthday"
                type="text"
              />
            </label>

            {/* <label>
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
            </label> */}
            <div className="breakdiv"></div>

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
            {/*DISABLE BUTTON */}
            <button name="submit new user" disabled={newUserDisabled}>
              Create Profile
            </button>
          </div>
        </form>
      </StyledNewUserForm>
    </div>
  );

}





const StyledNewUserForm = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  /* font-weight: ${(pr) => pr.theme.fontWeight}; */
  font-style: ${(pr) => pr.theme.fontStyle};
  font-size: ${(pr) => pr.theme.fontSize};
  padding: ${(pr) => pr.theme.padding};
  border: ${(pr) => pr.theme.border};
  max-width: 100%;
  margin: 2% auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const StyledFirstHeading = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
  /* font-weight: ${(pr) => pr.theme.fontWeight}; */
  font-style: ${(pr) => pr.theme.fontStyle};
  font-size: ${(pr) => pr.theme.h1FontSize};
  padding: ${(pr) => pr.theme.padding};
  //border: ${(pr) => pr.theme.border};
  max-width: 100%;
  margin: 2% auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  //background-color: ${(pr) => pr.theme.backgroundColor};
`;

const StyledSecondHeadings = styled.h2`
  color: ${(pr) => pr.theme.secondaryColor};
  margin: 2% auto;
  text-align: center;
`;

const StyledBottomOfPage = styled.div`
  background-color: ${(pr) => pr.theme.backgroundColor};
`;
