import axios from 'axios';

import { cardApi } from '../../../endpoints.ts';
import { addActiveCard, resetActiveCard } from '../../action/cardActions/cardActions';
import { messageAction } from '../../action/messageActions/messageAction';
import { getAllCardsThunk } from './getAllCardThunk';

const updateCardThunk = (requestBody: any) => async (dispatch: any) => {
    dispatch(resetActiveCard())
    try {
        const response = await axios.patch(`${cardApi}/update`, requestBody)
        if (response.status === 200) {
            dispatch(addActiveCard(response.data.payload))
            dispatch(getAllCardsThunk())
        }
        else dispatch(messageAction("Card description could not be updated"))
    } catch (error) {
        dispatch(resetActiveCard())
        dispatch(messageAction("Update card description API failed"))
    }
}
export default updateCardThunk