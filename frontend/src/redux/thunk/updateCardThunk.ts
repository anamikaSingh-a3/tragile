import axios from 'axios';
import { cardApi } from '../../endpoints.ts';
import { addActiveCard, resetActiveCard } from '../action/cardActions';

const updateCardThunk = (requestBody: any) => async (dispatch: any) => {
    try {
        const response = await axios.patch(`${cardApi}/update`, requestBody)
        dispatch(addActiveCard(response.data))
    } catch (error) {
        dispatch(resetActiveCard())
    }
}
export default updateCardThunk