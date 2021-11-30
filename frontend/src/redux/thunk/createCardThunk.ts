import { ICard } from "../interfaces"
import api from '../../api/card'
import { addCard } from '../action/cardActions';

const createCardThunk = (requestBody: ICard) => async(dispatch: any , getState:any)=> {
const response = await api.post('/create', requestBody)
dispatch(addCard(response.data))

}
export default createCardThunk