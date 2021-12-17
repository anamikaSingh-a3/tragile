import axios from 'axios';

import { cardApi } from '../../../endpoints.ts';
import { addCard } from '../../action/cardActions';
import { errorMessage } from '../../action/errorAction';

export const getAllCardsThunk = () => async (dispatch: any) => {
  try {
    const cards = await axios.get(`${cardApi}/getAll`)
    if (cards.status === 200)
      dispatch(addCard(cards.data.payload))
    else if (cards.status === 204)
      dispatch(errorMessage("No card found"))
  } catch (error) {
    dispatch(errorMessage("Failed getAll Card API"))
  }
}