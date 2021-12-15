import * as yup from 'yup'

export const boardSchema = yup.object().shape({
  board_id: yup.string().required(),
  title: yup.string().required('required title'),
  visibility: yup.string().required(),
  workspaceId: yup.string().required()
})

export const getBoardSchema = yup.object().shape({
  board_id: yup.string()
})

export const getWorkspaceBoardSchema = yup.object().shape({
  board_id: yup.string()
})
