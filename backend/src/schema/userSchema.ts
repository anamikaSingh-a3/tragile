import * as yup from 'yup';

export const userSchema = yup.object().shape({
    user_id: yup.string().required(),
    email: yup.string().required(),
    username: yup.string(),
    name: yup.string().required(),
    password: yup.string().required(),
    bio: yup.string(),
  })