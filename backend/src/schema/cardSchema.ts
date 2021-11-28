import * as yup from 'yup';

export const cardSchema = yup.object({
    id: yup.string().required(),
    title: yup.string(),
    description: yup.string(),
    due_date: yup.date().default(new Date()),
    listId: yup.string().required()
})