import * as yup from 'yup'

export const listSchema = yup.object().shape({
    list_id: yup.string().required(),
    title: yup.string().required(),
    description: yup.string(),
    board: yup.string()
})