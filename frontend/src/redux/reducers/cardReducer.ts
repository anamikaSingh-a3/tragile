import { ICard } from 'tragile-card';

import { ADD_CARD } from '../types';

const initialState: ICard[] = []

const addCardLogic = (state: ICard[], payload: ICard[]) => {
  if (payload.length >= 1) return [...payload]
  else return [...state, payload]
}
const cardReducer = (
  state = initialState,
  action: { type: string; payload: ICard[] }
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