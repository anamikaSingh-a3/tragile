import axios from 'axios';

import { cardApi } from '../../../endpoints.ts';
import { addActiveCard, resetActiveCard } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';

const updateCardListIdThunk = (requestBody: any) => async (dispatch: any) => {
    try {
        const response = await axios.patch(`${cardApi}/updateList`, requestBody, { ...config })
        if (response.status === 200)
            dispatch(addActiveCard(response.data.payload))
        else
            dispatch(messageAction("Card list id could not be updated"))
    } catch (error) {
        dispatch(resetActiveCard())
        dispatch(messageAction("Failed update card's list API"))
    }
}

export default updateCardListIdThunk