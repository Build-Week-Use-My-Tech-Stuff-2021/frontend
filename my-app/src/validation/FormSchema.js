import * as yup from "yup";

export default yup.object().shape({
  firstName: yup
  .string()
  .required("first name is required"),
  lastName: yup
  .string()
  .required("last name is required"),
  username: yup
  .string(),
  password: yup
  .string(),
  size: yup
    .string()
    .oneOf(["I am an owner/seller", "I am a renter/shopper"], "selection is required"),
})
