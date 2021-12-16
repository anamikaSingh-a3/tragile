import axios from 'axios';
import { cardApi } from '../../../endpoints.ts';
import { addActiveCard, resetActiveCard } from '../../action/cardActions';
import { errorMessage } from '../../action/errorAction';
import { getAllCardsThunk } from './getAllCardThunk';

const updateCardThunk = (requestBody: any) => async (dispatch: any) => {
    dispatch(resetActiveCard())
    try {
        const response = await axios.patch(`${cardApi}/update`, requestBody)
        if (response.status === 200) {
            dispatch(addActiveCard(response.data.payload))
            dispatch(getAllCardsThunk())
        }
        else dispatch(errorMessage("Card description could not be updated"))
    } catch (error) {
        dispatch(resetActiveCard())
        dispatch(errorMessage("Update card description API failed"))
    }
}
export default updateCardThunk