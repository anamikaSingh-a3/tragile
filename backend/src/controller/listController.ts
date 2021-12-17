import { Request, Response } from 'express';
import { IList } from 'tragile-list';
import { ITragileResponse } from 'tragile-response';

import { List } from '../database/models/list';
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
    const newList = await List.query().insert({
      title: data.title,
      description: data.description,
      board: data.board
    })
    response.statusCode = 201
    response.payload = newList
    response.message = "List created"
    res.status(response.statusCode).send(response)
    logger.info('New list created')
  } catch (error) {
    response.statusCode = 400
    response.payload = {}
    response.message = "List could not be created!"
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getBoardList = async (req: Request, res: Response) => {
  logger.info('In get board list API')
  try {
    const board_id = req.params.board_id
    const list = await List.query().where('board', '=', `${board_id}`)
    if (!list.length) {
      response.statusCode = 204
      response.payload = {}
      response.message = "No List found"
      res.status(response.statusCode).send(response)
      logger.warn('No List found')
    }
    else {
      response.statusCode = 200
      response.payload = list
      response.message = 'Card fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('List fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}
