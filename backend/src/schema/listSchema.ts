import * as yup from 'yup';

export const listSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  board: yup.number()
})

export const getBoardListSchema = yup.object().shape({
  board_id: yup.number().required()
})
