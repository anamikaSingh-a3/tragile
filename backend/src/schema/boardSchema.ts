import * as yup from 'yup'

export const boardSchema = yup.object().shape({
  id: yup.string(),
  title: yup.string().required('required title'),
  visibility: yup.string().required(),
  workspaceId: yup.string().required(),
  //   list: yup.array(),
})
