import { ICard } from "../interfaces"
import { addCard } from '../action/cardActions';
import { cardApi } from "../../endpoints.ts";
import axios from "axios";

const createCardThunk = (requestBody: ICard) => async (dispatch: any, getState: any) => {
    try {
        const response = await axios.post(`${cardApi}/create`, requestBody)
        dispatch(addCard(response.data))
    } catch (error) {
        alert(error)
    }
}
export default createCardThunk