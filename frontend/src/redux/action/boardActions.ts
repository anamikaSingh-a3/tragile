import { IBoard } from '../interfaces'

export const addBoard = (board: IBoard) => {
  return {
    id: board.board_id,
    type: 'ADD_BOARD',
    payload: board,
  }
}

export const addActiveBoards = (board: IBoard) => {
  return {
    id: board.board_id,
    type: 'ACTIVE_BOARD',
    payload: board,
  }
}

export const addActiveWorkspaceBoard = (board: IBoard)=>{

  return {id: board.board_id,
  type: 'ACTIVE_BOARD_IN_BOARDPAGE',
    payload: board
  }
}

export const resetActiveBoards = () => {

  return {
    type: 'RESET_BOARD',
  }
}
