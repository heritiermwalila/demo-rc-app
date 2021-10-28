import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email address is required'),
  password: yup.string().required('Password is required'),
})

const registerSchema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  company: yup.string(),
  website: yup.string(),
  email: yup.string().email('Invalid email address').required('Email name is required'),
  password: yup.string().required('Password is required')
})

export {loginSchema, registerSchema}