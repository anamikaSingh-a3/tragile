import { ICard } from '../interfaces'

const initialState: ICard[] = []

const cardReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_CARD': {
      if (action.payload.length >= 1) return [...state, ...action.payload]
      else return [...state, action.payload]
    }
    default:
      return state
  }
}
export default cardReducer
