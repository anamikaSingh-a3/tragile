import { IBoard } from '../interfaces'
// import api from '../../api/board'
import { addActiveBoards, addBoard, resetActiveBoards } from '../action'
import { boardApi } from '../../endpoints.ts'
import axios from 'axios'

export const createBoardThunk =
  (requestBody: IBoard) => async (dispatch: any) => {
    try {
      const response = await axios.post(`${boardApi}/create`, requestBody)
      dispatch(addBoard(response.data))
      dispatch(addActiveBoards(response.data))
    } catch (error) {
      alert(error)
      dispatch(resetActiveBoards())
    }
  }
