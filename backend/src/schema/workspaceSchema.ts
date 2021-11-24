import * as yup from 'yup'

export const workspaceSchema = yup.object().shape({
  id: yup.string(),
  title: yup.string().required('required title'),
  type: yup.string().required(),
  description: yup.string(),
  createdAt: yup.date().default(new Date()),
  //   board: yup.array(),
})
