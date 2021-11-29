import { IBoard } from '../interfaces'
import api from '../../api/board'
import { addActiveBoards, addBoard } from '../action'

export const createBoardThunk =
  (requestBody: IBoard) => async (dispatch: any) => {
    const response = await api.post('/create', requestBody)
    dispatch(addBoard(response.data))
    dispatch(addActiveBoards(response.data))
  }
