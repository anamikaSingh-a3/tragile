import { addCard } from '../../action/cardActions';
import { cardApi } from "../../../endpoints.ts";
import axios from "axios";
import { ICard } from 'tragile-card'
import { errorMessage } from '../../action/errorAction';


const createCardThunk = (requestBody: ICard) => async (dispatch: any, getState: any) => {
    try {
        const response = await axios.post(`${cardApi}/create`, requestBody)
        if (response.status === 201) dispatch(addCard(response.data.payload))
        else
            dispatch(errorMessage(response.data.message))
    } catch (error) {
        dispatch(errorMessage("Card could not be created"))
    }
}
export default createCardThunk