import axios from 'axios';
import { cardApi } from '../../endpoints.ts';
import { addActiveCard, resetActiveCard } from '../action/cardActions';
import { getAllCard } from '../../../../backend/src/controller/cardController';
import { getAllCardsThunk } from './getAllCardThunk';

const updateCardThunk = (requestBody: any) => async (dispatch: any) => {
    dispatch(resetActiveCard())
    try {
        const response = await axios.patch(`${cardApi}/update`, requestBody)
        dispatch(addActiveCard(response.data))
        dispatch(getAllCardsThunk())
    } catch (error) {
        dispatch(resetActiveCard())
    }
}
export default updateCardThunk