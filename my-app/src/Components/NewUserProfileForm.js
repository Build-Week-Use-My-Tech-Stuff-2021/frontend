








































































































































































































export default function NewUserProfileForm(){
  return(
    <div>NewUser</div>
  )
}



// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import * as yup from "yup";
// import FormSchema from "../validation/FormSchema";

// const initialProfileFormValues = {
//   firstName: "",
//   lastName: "",
//   username: "",
//   password: "",
//   email: "",
//   userRole: "",
// };
// const initialProfileFormErrors = {
//   firstName: "",
//   lastName: "",
//   username: "",
//   password: "",
//   email: "",
//   userRole: "",
// };

// constInitialDisabled = true;
// const initialNewUserProfileInfo = {};

// export default function NewUserProfileForm(props) {
//   const { values, submit, change, errors, disabled } = props;

//   const [newUserProfileInfo, setNewUserProfileInfo] = useState(
//     initialNewUserProfileInfo
//   );
//   const [newUserProfileFormValues, setNewUserProfileFormValues] = useState(
//     initialProfileFormValues
//   );
//   const [newUserFormErrors, setNewUserFormErrors] = useState(
//     initialNewUserFormErrors
//   );
//   const [disabled, setButtonDisabled] = useState(initialDisabled);

//   const postNewUserInfo = (newUserInfo) => {
//     axios
//       .post("", newUserInfo)
//       .then((res) => {
//         setNewUserProfileInfo(res.data);
//         setNewUserProfileFormValues(initialProfileFormValues);
//         console.log(profileInfo);
//       })
//       .catch((error) => {
//         console.log("there was an error ", error);
//       });
//   };

//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     submit();
//   };

//   const onChange = (evt) => {
//     /* potentially need to put checkboxes for user role options */
//     const { name, value } = evt.target;
//     const valueToUse = value;
//     change(name, valueToUse);
//   };

//   const userSubmit = () => {
//     const newProfile = {
//       firstName: newUserProfileFormValues.firstName.trim(),
//       lastName: newUserProfileFormValues.lastName.trim(),
//       username: newUserProfileFormValues.username.trim(),
//       password: newUserProfileFormValues.password.trim(),
//       userRole: newUserProfileFormValues.userRole,
//     };
//     postNewUserProfileInfo(newUserProfileInfo);
//   };

//   //validation useEffect
//   const inputChange = (firstName, value) => {
//     yup
//       .reach(FormSchema, firstName)
//       .validate(value)
//       .then(() => {
//         setNewUserFormErrors({
//           ...NewUserFormErrors,
//           [firstName]: "",
//         });
//       })
//       .catch((error) => {
//         setNewUserFormErrors({
//           ...NewUserFormErrors,
//           [firstName]: error.errors[0],
//         });
//       });

//     setNewUserProfileFormValues({
//       ...NewUserProfileFormValues,
//       [firstName]: value,
//     });
//   };

//   useEffect(() => {
//     FormSchema.isValid(formValues).then((valid) => {
//       setButtonDisabled(!valid);
//     });
//   }, [formValues]);

//   return (
//     <form className="new user form container" onSubmit={onSubmit}>
//       <div className="new user form submit">
//         <h2>New Profile</h2>
//         <p>Please fill out the information below</p>

//         {/*DISABLE BUTTON */}
//         <button name="submit new user" disabled={disabled}>
//           Create Profile
//         </button>

//         <div className="errors">
//           <div>{errors.name}</div>
//         </div>
//       </div>

//       <div className="form inputs">
//         <h4>General information</h4>

//         <label>
//           First Name
//           <input
//             value={values.firstName}
//             onChange={onChange}
//             name="first name"
//             type="text"
//           />
//         </label>

//         <label>
//           Last Name
//           <input
//             value={values.lastName}
//             onChange={onChange}
//             name="last name"
//             type="text"
//           />
//         </label>

//         <label>
//           Role
//           <select onChange={onChange} value={values.size} name="size">
//             <option value="">- Select an option -</option>
//             <option value="owner">
//               Owner - I want to make my equipment available to rent
//             </option>
//             <option value="renter">
//               Renter - I want find available equipment to rent
//             </option>
//           </select>
//         </label>

//         <label>
//           Username
//           <input
//             type="text"
//             name="username"
//             checked={values.username}
//             onChange={onChange}
//           />
//         </label>

//         <label>
//           Password
//           <input
//             type="text"
//             name="password"
//             checked={values.password}
//             onChange={onChange}
//           />
//         </label>

//         <label>
//           Email
//           <input
//             type="text"
//             name="email"
//             checked={values.email}
//             onChange={onChange}
//           />
//         </label>
//       </div>
//     </form>
//   );
// }
