import * as yup from 'yup'

export const workspaceSchema = yup.object().shape({
  // workspace_id: yup.string().required(),
  title: yup.string().required(),
  type: yup.string().required(),
  description: yup.string(),
  createdAt: yup.date().default(new Date()),
})

export const workspaceByIdSchema = yup.object().shape({
  workspace_id: yup.string(),
})