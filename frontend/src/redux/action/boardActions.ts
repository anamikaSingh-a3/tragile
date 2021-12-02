import { IBoard } from '../interfaces'
import { ACTIVE_BOARD, ACTIVE_BOARD_IN_BOARDPAGE, ADD_BOARD, RESET_ACTIVE_BOARD_IN_BOARDPAGE, RESET_BOARD } from '../types'

export const addBoard = (board: IBoard) => {
    return {
        id: board.board_id,
        type: ADD_BOARD,
        payload: board,
    }
}

export const addActiveBoards = (board: IBoard) => {
    return {
        id: board.board_id,
        type: ACTIVE_BOARD,
        payload: board,
    }
}

export const addActiveWorkspaceBoard = (board: IBoard) => {
    return {
        id: board.board_id,
        type: ACTIVE_BOARD_IN_BOARDPAGE,
        payload: board
    }
}

export const resetActiveWorkspaceBoard = () => {
    return {
        type: RESET_ACTIVE_BOARD_IN_BOARDPAGE
    }
}

export const resetActiveBoards = () => {
    return {
        type: RESET_BOARD,
    }
}