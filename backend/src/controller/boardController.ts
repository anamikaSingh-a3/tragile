import { Request, Response } from 'express';
import { IBoard } from 'tragile-board';
import { ITragileResponse } from 'tragile-response';

import { Board } from '../database/models/board';
import { boardSchema, getBoardSchema, getWorkspaceBoardSchema } from '../schema/boardSchema';
import logger from '../utility/logger';

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

export const createBoard = async (req: Request, res: Response) => {
  logger.info('In create board API')
  try {
    const data: IBoard = {
      title: req.body.title,
      workspace: req.body.workspace,
      visibility: req.body.visibility
    }
    const board = await boardSchema.validate(data)

    const newBoard = await Board.query().insert({
      title: board.title,
      visibility: board.visibility,
      workspace: board.workspace
    })
    response.statusCode = 201
    response.payload = newBoard
    response.message = "Board created"
    logger.info('New board created')
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Create board API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    logger.error('Board could not be created:', error)
    res.status(response.statusCode).send(response)
  }
}

export const getBoard = async (req: Request, res: Response) => {
  logger.info('In get board API')

  try {
    const board_id = req.params.board_id
    await getBoardSchema.validate({ board_id })
    const board = await Board.query().findById(req.params.board_id)

    if (!board) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No board found"
      logger.warn('No board found')
    }
    else {
      response.statusCode = 200
      response.payload = board
      response.message = 'Board fetched successfully'
      logger.info('Board fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get board API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Board could not be fetched:', error)
  }
}

export const getWorkspaceBoard = async (req: Request, res: Response) => {
  logger.info('In get workspace board API')

  try {
    const workspace_id = req.params.workspace_id
    await getWorkspaceBoardSchema.validate({ workspace_id })

    const board = await Board.query().where('workspace', '=', `${workspace_id}`)
    if (!board.length) {
      logger.warn('No Board found!')
      response.statusCode = 404
      response.payload = {}
      response.message = "No Board found"
    }
    else {
      logger.info('Boards fetched successfully')
      response.statusCode = 200,
      response.payload = board
      response.message = "Boards fetched successfully"
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get workspace API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Board could not be fetched:', error)
  }
}

export const getAllBoard = async (req: Request, res: Response) => {
  logger.info('In get all board API')
  try {
    const boards = await Board.query()
    if (boards.length == 0) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No board found"
      logger.warn('No board found')
    }
    else {
      response.statusCode = 200
      response.payload = boards
      response.message = 'Board fetched successfully'
      logger.info('Board fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get all board API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Board could not be fetched:', error)
  }
}
