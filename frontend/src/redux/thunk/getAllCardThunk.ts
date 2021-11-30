import api from '../../api/card'
import { addCard } from '../action/cardActions';


export const getAllCardsThunk = () => async (dispatch: any) => {
  const cards = await api.get('/getAll')
  dispatch(addCard(cards.data))
}
