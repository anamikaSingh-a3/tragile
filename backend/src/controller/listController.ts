import { Request, Response } from 'express';
import { IList } from 'tragile-list';
import { ITragileResponse } from 'tragile-response';

import { List } from '../database/models/list';
import { getBoardListSchema, listSchema } from '../schema/listSchema';
import logger from '../utility/logger';

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

export const createList = async (req: Request, res: Response) => {
  logger.info('In create list API')
  try {
    const data: IList = {
      title: req.body.title,
      description: req.body.description,
      board: req.body.board
    }
    const list = await listSchema.validate(data)
    const newList = await List.query().insert({
      title: list.title,
      description: list.description,
      board: list.board
    })
    response.statusCode = 201
    response.payload = newList
    response.message = "List created"
    res.status(response.statusCode).send(response)
    logger.info('New list created')
  } catch (error) {
    logger.error('Create list API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error("List could not be created:", error)
  }
}

export const getBoardList = async (req: Request, res: Response) => {
  logger.info('In get board list API')
  try {
    const board_id = req.params.board_id
    const board = await getBoardListSchema.validate({board_id})
    const list = await List.query().where('board', '=', `${board.board_id}`)
    if (!list.length) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No List found"
      logger.warn('No List found')
    }
    else {
      response.statusCode = 200
      response.payload = list
      response.message = 'Card fetched successfully'
      logger.info('List fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get board list API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('List could not be fetched:', error)
  }
}
