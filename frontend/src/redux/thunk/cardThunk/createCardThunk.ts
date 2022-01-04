import axios from 'axios';
import { ICard } from 'tragile-card';

import { cardApi } from '../../../endpoints.ts';
import { addCard } from '../../action/cardActions/cardActions';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';


const createCardThunk = (requestBody: ICard) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${cardApi}/create`, requestBody, { ...config })
        if (response.status === 201) dispatch(addCard(response.data.payload))
        else
            dispatch(messageAction(response.data.message))
    } catch (error) {
        dispatch(messageAction("Card could not be created"))
    }
}
export default createCardThunk