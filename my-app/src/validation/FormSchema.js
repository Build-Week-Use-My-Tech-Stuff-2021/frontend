import * as yup from "yup";

export default yup.object().shape({
  birthday: yup
  .string()
  .required("birthday is required"),
  username: yup
  .string()
  .required('username is required'),
  password: yup
  .string()
  .required("password is required"),
  email: yup
  .string()
  .email("must be an email")
  .required("email is required"),
  // role: yup
  //   .string()
    // .oneOf(["I am an owner/seller", "I am a renter/shopper"], "selection is required"),
})
