// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
// import * as yup from 'yup'
// import FormSchema from '../validation/FormSchema'

// export default function LoginForm() {


// const [loginValues, setLoginValues] = useState("")
// const [formErrors, setFormErrors] = useState(initialFormErrors);
// const [disabled, setButtonDisabled] = useState(initialDisabled)


//  //validation useEffect
//  const inputChange = (name, value) => {
//     yup
//       .reach(FormSchema, name)
//       .validate(value)
//       .then(() => {
//         setFormErrors({
//           ...formErrors,
//           [name]: "",
//         });
//       })
//       .catch((error) => {
//         setFormErrors({
//           ...formErrors,
//           [name]: error.errors[0],
//         });
//       });

//     setLoginValues({
//       ...LoginValues,
//       [name]: value,
//     });
//   };


//   useEffect(() => {
//     FormSchema.isValid(formValues).then((valid) => {
//       setButtonDisabled(!valid);
//     });
//   }, [formValues])

//   return (
//     <div>
//         <h1>Welcome to Use My Tech!</h1>
//         <h3>Returning? Please log-in below</h3>
//         <h3>New to our website? Please create a new account</h3>
//         <form>
//             <label className="username input">
//                 <input 
//                 name="username"
//                 type="text"
//                 value={loginValues.userName}
//                 onChange={onChange}
//                 />
//             </label>
//             <label className="password input">
//                 <input 
//                 name="password"
//                 type="text"
//                 value={loginValues.password}
//                 onChange={onChange}
//                 />
//             </label>
//             <label className="user role">
//                 <select>
//                     <option value="">Select an option</option>
//                     <option value="owner role">I want to make my equipment available to rent</option>
//                     <option value="renter role">I want to find equipment to rent</option>
//                 </select>
//             </label>
//         </form>
//     </div>
//   )
// }
import React from 'react';

const LoginForm = () => {

    
    return(
        <div>
            <h1>LoginPage</h1>
            <button>Renter</button>
            <button>Owner</button>
        </div>
    )
}
export default LoginForm;