import { IList } from 'tragile-list';

import { ACTIVE_LIST, ADD_LIST } from '../types';

const initialState: IList[] = []

const addListLogic = (state: IList[], payload: IList[]) => {
  if (payload.length >= 1)
    return [...state, ...payload]
  else
    return [...state, payload]
}

const listReducer = (
  state = initialState,
  action: { type: string; payload: IList[] }
) => {
  switch (action.type) {
    case ADD_LIST: {
      return addListLogic(state, action.payload)
    }
    case ACTIVE_LIST: {
      return action.payload
    }
    default:
      return state
  }
}

export default listReducer