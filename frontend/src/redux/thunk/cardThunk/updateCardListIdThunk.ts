import axios from 'axios';

import { cardApi } from '../../../endpoints.ts';
import { addActiveCard, resetActiveCard } from '../../action';
import { errorMessage } from '../../action/errorAction';

const updateCardListIdThunk = (requestBody: any) => async (dispatch: any) => {
    try {
        const response = await axios.patch(`${cardApi}/updateList`, requestBody)
        if (response.status === 200)
            dispatch(addActiveCard(response.data.payload))
        else
            dispatch(errorMessage("Card list id could not be updated"))
    } catch (error) {
        dispatch(resetActiveCard())
        dispatch(errorMessage("Failed update card's list API"))
    }
}

export default updateCardListIdThunk