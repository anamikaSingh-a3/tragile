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
