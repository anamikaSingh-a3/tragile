import axios from 'axios';

import { cardApi } from '../../../endpoints.ts';
import { addCard } from '../../action/cardActions/cardActions';
import { messageAction } from '../../action/messageActions/messageAction';

export const getAllCardsThunk = () => async (dispatch: any) => {
  try {
    const cards = await axios.get(`${cardApi}/getAll`)
    if (cards.status === 200)
      dispatch(addCard(cards.data.payload))
    else if (cards.status === 204)
      dispatch(messageAction("No card found"))
  } catch (error) {
    dispatch(messageAction("Failed getAll Card API"))
  }
}