import { addActiveBoards, addBoard, resetActiveBoards } from '../../action'
import { boardApi } from '../../../endpoints.ts'
import axios from 'axios'
import { IBoard } from 'tragile-board'
import { errorMessage } from '../../action/errorAction'

export const createBoardThunk = (requestBody: IBoard) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${boardApi}/create`, requestBody)
    if (response.status === 201) {
      // dispatch(addBoard(response.data.payload))
      dispatch(addActiveBoards(response.data.payload))
    } else dispatch(errorMessage(response.data.message))
  } catch (error) {
    dispatch(errorMessage('Board could not be created'))
    dispatch(resetActiveBoards())
  }
}
