import { Request, Response } from 'express'
import { IBoard } from 'tragile-board'
import { pool } from '../db'
// import { IBoard } from '../interface/boardInterface'
import {
  boardSchema,
  getBoardSchema,
  getWorkspaceBoardSchema
} from '../schema/boardSchema'
import logger from '../utility/logger'

export const createBoard = async (req: Request, res: Response) => {
  logger.info('In create board API')
  try {
    const data: IBoard = {
      board_id: req.body.board_id,
      title: req.body.title,
      workspaceId: req.body.workspaceId,
      visibility: req.body.visibility
    }
    const board = await boardSchema.validate(data)
    const newBoard = await pool.query(
      'INSERT INTO board (board_id,title,visibility,workspace) VALUES ($1,$2,$3,$4) RETURNING *',
      [board.board_id, board.title, board.visibility, board.workspaceId]
    )
    res.status(200).send(newBoard.rows[0])
    logger.info('New board created')
  } catch (error) {
    res.status(401).send(error)
    logger.error(error)
  }
}

export const getBoard = async (req: Request, res: Response) => {
  logger.info('In get board API')
  try {
    const board_id = req.params.board_id
    await getBoardSchema.isValid(board_id)
    const board = await pool.query('SELECT * FROM board where board_id=$1', [
      board_id
    ])

    if (board.rowCount < 1) {
      logger.warn('No board found')
      return res.status(400).send('No board found')
    }
    res.status(200).send(board.rows[0])
    logger.info('Board fetched successfully')
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getWorkspaceBoard = async (req: Request, res: Response) => {
  logger.info('In get workspace API')
  try {
    const workspace_id = req.params.workspace_id
    await getWorkspaceBoardSchema.isValid(workspace_id)
    const board = await pool.query('SELECT * FROM board where workspace=$1', [
      workspace_id
    ])
    if (board.rowCount < 1) { 
      logger.warn('No Board found')
      return res.status(400).send([])
    }
    logger.info('Boards fetched successfully')
    res.status(200).send(board.rows)
  } catch (error) {
    logger.error(error)
    res.status(401).send(error)
  }
}

export const getAllBoard = async (req: Request, res: Response) => {
  logger.info('In get all board API')
  try {
    const boards = await pool.query('SELECT * FROM board')
    res.status(200).send(boards.rows)
    logger.info('Board successfully fetched')
  } catch (error) {
    logger.error(error)
    res.status(401).send(error)
  }
}
