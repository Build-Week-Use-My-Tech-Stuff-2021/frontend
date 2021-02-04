import React, { useState, useEffect } from "react";
import * as yup from "yup";
import FormSchema from "../validation/FormSchema";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import banner from "../images/banner.jpg";

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
      <Banner name="banner">
        <img src={banner} alt="circuit board"></img>
      </Banner>
      <StyledFirstHeading>Welcome to Use My Tech!</StyledFirstHeading>

      <StyledLoginForm>
        <StyledSecondHeadings>
          Returning? Please log-in below
        </StyledSecondHeadings>
        <form className="login form container" onSubmit={onSubmit}>
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
          <div className="login submit">
            {/*DISABLE BUTTON */}
            <button name="submit new user" disabled={disabled}>
              Log-in
            </button>

            <div className="errors">
              <div>{errors}</div>
            </div>
          </div>
        </form>
        <div name="break div"></div>
        <div>
          <StyledSecondHeadings>
            New to our website? Please create a new account
          </StyledSecondHeadings>
          <button name="create new user button" onClick={createNew}>
            Create New User
          </button>
        </div>
      </StyledLoginForm>
      <StyledBottomOfPage name="bottomstyle"></StyledBottomOfPage>
    </div>
  );
}

const StyledLoginForm = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  /* font-weight: ${(pr) => pr.theme.fontWeight}; */
  font-style: ${(pr) => pr.theme.fontStyle};
  font-size: ${(pr) => pr.theme.fontSize};
  padding: ${(pr) => pr.theme.padding};
  //border: ${(pr) => pr.theme.border};
  max-width: 100%;
  margin: 2% auto;
  display: flex;
  flex-flow: column nowrap;
  //background-color: ${(pr) => pr.theme.backgroundColor};
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


const Banner = styled.div`
  max-height: 10%;
`;
