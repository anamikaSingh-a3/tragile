import * as yup from 'yup'

export const listSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    board: yup.string()
})