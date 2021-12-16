import axios from "axios"
import { cardApi } from "../../../endpoints.ts"
import { addActiveCard, resetActiveCard } from "../../action/cardAction/cardActions"

const updateCardListIdThunk = (requestBody: any) => async (dispatch: any) => {
    try {
        const response = await axios.patch(`${cardApi}/updateList`, requestBody)
        dispatch(addActiveCard(response.data.payload))
    } catch (error) {
        dispatch(resetActiveCard())
    }
}

export default updateCardListIdThunk