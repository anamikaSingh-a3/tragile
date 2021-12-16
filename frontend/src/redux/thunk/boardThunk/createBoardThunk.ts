
import { boardApi } from '../../../endpoints.ts'
import axios from 'axios'
import { IBoard } from 'tragile-board'
import { addActiveBoards, addBoard, resetActiveBoards } from '../../action/boardAction/boardActions'

export const createBoardThunk =
    (requestBody: IBoard) => async (dispatch: any) => {
        try {
            const response = await axios.post(`${boardApi}/create`, requestBody)
            dispatch(addBoard(response.data.payload))
            dispatch(addActiveBoards(response.data.payload))
        } catch (error) {
            alert(error)
            dispatch(resetActiveBoards())
        }
    }