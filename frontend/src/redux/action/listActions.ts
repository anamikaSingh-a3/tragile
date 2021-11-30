import { IList } from "../interfaces";

export const addList = (list: IList) =>{
    return {
        id: list.list_id,
        type: 'ADD_LIST',
        payload: list,
    }
}
export const addActiveBoardsList = (list: IList) => {
  console.log("in active board loist action")
    return {
      id: list.list_id,
      type: 'ACTIVE_BOARD_LIST',
      payload: list,
    }
  }

  export const addActiveList = (list: IList) => {
      return {
        type: 'ACTIVE_LIST',
        payload: list,
      }
    }

    export const resetActiveBoardsList = () => {
      return {
        type: 'REST_ACTIVE_BOARDS_LIST'
      }
    }