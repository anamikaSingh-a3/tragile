import { Request, Response } from 'express'
import { IBoard } from 'tragile-board'
import { ITragileResponse } from 'tragile-response'
import { pool } from '../db'
import {
  boardSchema,
  getBoardSchema,
  getWorkspaceBoardSchema
} from '../schema/boardSchema'
import logger from '../utility/logger'

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

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
    response.statusCode = 201
    response.payload = newBoard.rows
    response.message = "Board created"
    logger.info('New board created')
    res.status(response.statusCode).send(response)
  } catch (error) {
    response.statusCode = 400
    response.payload = {}
    response.message = "Board could not be created!"
    logger.error(error)
    res.status(response.statusCode).send(response)
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
      response.statusCode = 404
      response.payload = {}
      response.message = "No board found"
      logger.warn('No board found')
      res.status(response.statusCode).send(response)
    }
    else {
      response.statusCode = 200
      response.payload = board.rows
      response.message = 'Board fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Board fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getWorkspaceBoard = async (req: Request, res: Response) => {
  logger.info('In get workspace board API')

  try {
    const workspace_id = req.params.workspace_id
    await getWorkspaceBoardSchema.isValid(workspace_id)
    const board = await pool.query('SELECT * FROM board where workspace=$1', [
      workspace_id
    ])
    if (board.rowCount < 1) { 
      logger.warn('No Board found')
      response.statusCode = 404
      response.payload = {}
      response.message = "No Board found"
      res.status(response.statusCode).send(response)
    }
    else {
      logger.info('Boards fetched successfully')
      response.statusCode = 200,
      response.payload = board.rows
      response.message = "Boards fetched successfully"
      res.status(response.statusCode).send(response)
    }
  } catch (error) {
    logger.error(error)
    response.statusCode = 400
    res.status(response.statusCode).send(response)
  }
}

export const getAllBoard = async (req: Request, res: Response) => {
  logger.info('In get all board API')
  try {
    const boards = await pool.query('SELECT * FROM board')
    if (boards.rowCount < 1) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No board found"
      logger.warn('No board found')
      res.status(response.statusCode).send(response)
    }
    else {
      response.statusCode = 200
      response.payload = boards.rows
      response.message = 'Board fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Board fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}
