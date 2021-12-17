import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Name must be required'),
  email: yup.string().email('Must be a valid email').required(),
  password: yup.string().required('password must be required'),
  username: yup.string(),
  bio: yup.string(),
})

export const signInSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().required('Password is required')
})