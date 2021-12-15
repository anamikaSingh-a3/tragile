import { Request, Response } from 'express'
import { IList } from 'tragile-list'
import { ITragileResponse } from 'tragile-response'
import { pool } from '../db'
import { getBoardListSchema, listSchema } from '../schema/listSchema'
import logger from '../utility/logger'

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

export const createList = async (req: Request, res: Response) => {
  logger.info('In create list API')
  try {
    const data: IList = {
      list_id: req.body.list_id,
      title: req.body.title,
      description: req.body.description,
      board_id: req.body.board_id
    }
    const list = await listSchema.validate(data)
    const newList = await pool.query(
      'INSERT INTO list (list_id,title,description,board) VALUES ($1,$2,$3,$4) RETURNING *',
      [list.list_id, list.title, list.description, list.board_id]
    )
    response.statusCode = 201
    response.payload = newList.rows
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
    await getBoardListSchema.isValid(board_id)
    const list = await pool.query('SELECT * FROM list where board=$1', [
      board_id
    ])
    if (list.rowCount < 1) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No List found"
      res.status(response.statusCode).send(response)
      logger.warn('No List found')
    }
    else {
      response.statusCode = 200
      response.payload = list.rows
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
