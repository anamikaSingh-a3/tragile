import { ICard } from "../interfaces"
import { ACTIVE_CARD, RESET_ACTIVE_CARD } from "../types"

const initialState: ICard = {
    card_id: "",
    title: "",
    list: ""
}

const activeCardReducer = (
    state = initialState,
    action: { type: string, payload: ICard }
) => {
    switch (action.type) {
        case ACTIVE_CARD: {
            return action.payload
        }
        case RESET_ACTIVE_CARD: {
            return state
        }
        default:
            return state
    }
}
export default activeCardReducer