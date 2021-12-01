import { IList } from '../interfaces'
import { ACTIVE_BOARD_LIST, ACTIVE_LIST, ADD_LIST, REST_ACTIVE_BOARDS_LIST } from '../types'

export const addList = (list: IList) => {
  return {
    id: list.list_id,
    type: ADD_LIST,
    payload: list
  }
}
export const addActiveBoardsList = (list: IList) => {
  return {
    id: list.list_id,
    type: ACTIVE_BOARD_LIST,
    payload: list
  }
}

export const resetActiveBoardsList = () => {
  return {
    type: REST_ACTIVE_BOARDS_LIST
  }
}

export const addActiveList = (list: IList) => {
  return {
    type: ACTIVE_LIST,
    payload: list
  }
}

