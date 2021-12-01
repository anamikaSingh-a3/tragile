import { ICard } from '../interfaces'
import { ADD_CARD } from '../types'

const initialState: ICard[] = []

const addCardLogic = (state: ICard[], payload: any) => {
  if (payload.length >= 1) return [...payload]
  else return [...state, payload]
}
const cardReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_CARD: {
      return addCardLogic(state, action.payload)
    }
    default:
      return state
  }
}
export default cardReducer
