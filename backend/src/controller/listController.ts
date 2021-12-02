import { Request, Response } from 'express'
import { pool } from '../db'
import { IList } from '../interface/listInterface'
import { getBoardListSchema, listSchema } from '../schema/listSchema'
import logger from '../utility/logger'

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
    res.status(200).send(newList.rows)
    logger.info('New list created')
  
  } catch (error) {
    res.status(401).send(error)
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
      logger.warn('No List found')
      return res.status(400).send('No list found')
    }
    logger.info('List fetched successfully')
    res.status(200).send(list.rows)
  } catch (error) {
    logger.error(error)
    res.status(401).send(error)
  }
}
