import { IBoard } from '../interfaces'

// export const addBoard = (board: IBoard, state: any) => {
//   return {
//     id: board.id,
//     type: 'ADD_BOARD',
//     payload: { board: board, state: state },
//   }
// }
export const addBoard = (board: IBoard) => {
  return {
    id: board.id,
    type: 'ADD_BOARD',
    payload: board,
  }
}
