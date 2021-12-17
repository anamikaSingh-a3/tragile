import * as yup from 'yup';

export const boardSchema = yup.object().shape({
  title: yup.string().required('Board title is required'),
  visibility: yup.string(),
  workspace: yup.number().required('Board workspace is required')
})

export const getBoardSchema = yup.object().shape({
  board_id: yup.number().required('Board id is required')
})

export const getWorkspaceBoardSchema = yup.object().shape({
  workspace_id: yup.number().required('Workspace id is required')
})