import axios from "axios"
import { cardApi } from "../../../endpoints.ts"
import { addActiveCard, resetActiveCard } from "../../action"

const updateCardListIdThunk = (requestBody: any) => async (dispatch: any) => {
    try {
        const response = await axios.patch(`${cardApi}/updateList`, requestBody)
        dispatch(addActiveCard(response.data))
    } catch (error) {
        dispatch(resetActiveCard())
    }
}

export default updateCardListIdThunk