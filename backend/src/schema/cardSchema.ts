import * as yup from 'yup';

export const cardSchema = yup.object({
    title: yup.string().required('card title required'),
    description: yup.string(),
    due_date: yup.date().default(new Date()),
    list: yup.number().required('list id required')
})

export const getListCardSchema = yup.object({
    list_id: yup.number().required('List id required')
})

export const updateCardDescriptionSchema = yup.object({
    id: yup.number().required('Card id is required'),
    desc: yup.string().required('Description is required')
})

export const updateCardListSchema = yup.object({
    id: yup.number().required('Card id is required'),
    listId: yup.number().required('list id is required')
})