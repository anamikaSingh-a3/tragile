import { IBoard } from '../interfaces'
import api from '../../api/board'
import { addBoard } from '../action'

export const createBoardThunk =
  (requestBody: IBoard) => async (dispatch: any) => {
    const response = await api.post('/create', requestBody)
    console.log('RESSSSs', response)
    dispatch(addBoard(response.data))
  }
