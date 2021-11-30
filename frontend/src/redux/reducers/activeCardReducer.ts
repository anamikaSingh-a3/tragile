import { ICard } from "../interfaces"

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
        case 'ACTIVE_CARD': {
            return action.payload
        }
        default:
            return state
    }
}
export default activeCardReducer