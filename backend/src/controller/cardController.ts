import { Response, Request } from 'express'
import { ICard } from 'tragile-card'
import { ITragileResponse } from 'tragile-response'
import { pool } from '../db'
import { cardSchema } from '../schema/cardSchema'
import logger from '../utility/logger'

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

export const createCard = async (req: Request, res: Response) => {
  logger.info('In create card API')
  try {
    const data: ICard = {
      card_id: req.body.card_id,
      title: req.body.title,
      description: req.body.description,
      list_id: req.body.list
    }
    const card = await cardSchema.validate(data)
    const newCard = await pool.query(
      'INSERT INTO card (card_id,title,description,due_date,list) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [card.card_id, card.title, card.description, card.due_date, card.list_id]
    )
    response.statusCode = 201
    response.payload = newCard.rows
    response.message = "Card created"
    res.status(response.statusCode).send(response)
    logger.info('Card created')
  } catch (error) {
    response.statusCode = 400
    response.payload = {}
    response.message = "Board could not be created!"
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getListCard = async (req: Request, res: Response) => {
  logger.info('In get list card API')
  try {
    const id = req.params.list_id
    await cardSchema.isValid({ listId: id })
    const card = await pool.query('SELECT * FROM card where list=$1', [id])
    if (card.rowCount < 1) { 
      response.statusCode = 404
      response.payload = {}
      response.message = "No Card found"
      res.status(response.statusCode).send(response)
      logger.warn('No card found')
    }
    else {
      response.statusCode = 200
      response.payload = card.rows
      response.message = 'Card fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Card fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getAllCard = async (req: Request, res: Response) => {
  logger.info('In get all card API')
  try {
    const cards = await pool.query('SELECT * FROM card')
    if (cards.rowCount < 1) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No card found"
      logger.warn('No card found')
      res.status(response.statusCode).send(response)
    }
    else {
      response.statusCode = 200
      response.payload = cards.rows
      response.message = 'Card fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Card fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const updateCardDescription = async (req: Request, res: Response) => {
  logger.info('In update card API')
  
  try {
    const id = req.body.card_id
    const desc = req.body.description
    await cardSchema.isValid({ card_id: id })
    const card = await pool.query(
      'UPDATE card SET description=$1 WHERE card_id=$2 RETURNING *',
      [desc, id]
    )
    response.statusCode = 201
    response.payload = card.rows
    response.message = "Card description updated"
    res.status(response.statusCode).send(response)
    logger.info('Card updated')
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const updateCardList = async (req: Request, res: Response) => {
  logger.info('In update card list API')

  try {
    const id = req.body.card_id
    const listId = req.body.list_id
    await cardSchema.isValid({ card_id: id })
    const card = await pool.query(
      'UPDATE card SET list=$1 WHERE card_id=$2 RETURNING *',
      [listId, id]
    )
    response.statusCode = 201
    response.payload = card.rows
    response.message = "Card's listId updated"
    res.status(response.statusCode).send(response)
    res.status(response.statusCode).send(response)
    logger.info('Card updated')
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}