import { IList } from '../interfaces'

const initialState: IList[] = []

const listReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_LIST': {
      if (action.payload.length > 1) return [...state, ...action.payload]
      else 
      return [action.payload]
    }
    case 'ACTIVE_LIST':{
      return action.payload
    }
    default:
      return state
  }
}

export default listReducer
