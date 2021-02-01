import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as yup from 'yup'
import FormSchema from '../validation/FormSchema'

const initialProfileFormValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    userRole: ""
}
 const initialProfileFormErrors = {
     firstName: "",
     lastName: "",
     username: "",
     password: "",
     role: ""
 }

 constInitialDisabled = true;
 const initialProfileInfo = {};


export default function ProfileForm() {
    const [profileInfo, setProfileInfo] = useState(initialProfileInfo)
    const [profileFormValues, setProfileFormValues] = useState(initialProfileFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setButtonDisabled] = useState(initialDisabled);

    const postNewProfile = (newProfile) => {
        axios
        .post("", newProfile)
        .then()
    }





    const userSubmit = () => {
        const newProfile = {
          firstName: profileFormValues.firstName.trim(),
          lastName: profileFormValues.lastName.trim(),
          username: profileFormValues.username.trim(),
          password: profileFormValues.password.trim(),
          userRole: profileFormValues.userRole
        };
      };




      return (
          
      )
}