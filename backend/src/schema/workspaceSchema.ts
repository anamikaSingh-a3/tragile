import * as yup from 'yup';

export const createWorkspaceSchema = yup.object().shape({
  title: yup.string().required('Workspace title is required'),
  type: yup.string().required('Workspace type is required'),
  description: yup.string(),
  created_by: yup.number().required()
})

export const getWorkspaceSchema = yup.object().shape({
  workspace_id: yup.number().required("Workspace id is required")
})

export const workspaceByUserId = yup.object().shape({
  user_id: yup.number().required('User id is required'),
})