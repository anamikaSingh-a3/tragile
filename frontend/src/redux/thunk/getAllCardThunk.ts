import axios from 'axios';
import { cardApi } from '../../endpoints.ts';
import { addCard } from '../action/cardActions';

export const getAllCardsThunk = () => async (dispatch: any) => {
  try {
    const cards = await axios.get(`${cardApi}/getAll`)
    dispatch(addCard(cards.data))
  } catch (error) {
    alert(error)
  }
}