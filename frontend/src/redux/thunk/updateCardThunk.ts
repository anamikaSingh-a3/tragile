import api from '../../api/card'
import { addActiveCard } from '../action/cardActions';

const updateCardThunk = (reqestBody: any) => async (dispatch: any) => {
    const response = await api.patch('/update', reqestBody)
    dispatch(addActiveCard(response.data))
}
export default updateCardThunk