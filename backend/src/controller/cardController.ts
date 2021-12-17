import { Request, Response } from 'express';
import { ICard } from 'tragile-card';
import { ITragileResponse } from 'tragile-response';

import { Card } from '../database/models/card';
import { cardSchema, getListCardSchema, updateCardDescriptionSchema, updateCardListSchema } from '../schema/cardSchema';
import logger from '../utility/logger';

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

export const createCard = async (req: Request, res: Response) => {
  logger.info('In create card API')
  try {
    const data: ICard = {
      title: req.body.title,
      description: req.body.description,
      list: req.body.list,
      due_date: req.body.due_date
    }
    const card = await cardSchema.validate(data)
    const newCard = await Card.query().insert({
      title: card.title,
      description: card.description,
      list: card.list
    })
    response.statusCode = 201
    response.payload = newCard
    response.message = "Card created"
    res.status(response.statusCode).send(response)
    logger.info('Card created')
  } catch (error) {
    logger.error('Create card API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error("Card could not be created:", error)
  }
}

export const getListCard = async (req: Request, res: Response) => {
  logger.info('In get list card API')
  try {
    const list_id = req.params.list_id
    const listId = await getListCardSchema.validate({ list_id })
    const card = await Card.query().where('list', '=', `${listId.list_id}`)

    if (!card.length) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No Card found"
      logger.warn('No card found')
    }
    else {
      response.statusCode = 200
      response.payload = card
      response.message = 'Card fetched successfully'
      logger.info('Card fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get list card API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Card could not be fetched:', error)
  }
}

export const getAllCard = async (req: Request, res: Response) => {
  logger.info('In get all card API')
  try {
    const cards = await Card.query()
    if (cards.length == 0) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No card found"
      logger.warn('No card found')
    }
    else {
      response.statusCode = 200
      response.payload = cards
      response.message = 'Card fetched successfully'
      logger.info('Card fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get all card API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Cards could not be fetched:', error)
  }
}

export const updateCardDescription = async (req: Request, res: Response) => {
  logger.info('In update card API')

  try {
    const id = req.body.card_id
    const desc = req.body.description

    const cardSchema = await updateCardDescriptionSchema.validate({ id, desc })
    const card = await Card.query().findById(id).patchAndFetchById(cardSchema.id, {
      description: cardSchema.desc
    })
    response.statusCode = 200
    response.payload = card
    response.message = "Card description updated"
    res.status(response.statusCode).send(response)
    logger.info('Card updated')
  } catch (error) {
    logger.error('Update card description API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    res.status(response.statusCode).send(response)
    logger.error('Card description could not be updated:', error)
  }
}

export const updateCardList = async (req: Request, res: Response) => {
  logger.info('In update card list API')

  try {
    const id = req.body.card_id
    const listId = req.body.list_id

    const cardSchema = await updateCardListSchema.validate({ id, listId })

    const card = await Card.query().findById(cardSchema.id).patchAndFetchById(cardSchema.id, {
      list: cardSchema.listId
    })
    response.statusCode = 200
    response.payload = card
    response.message = "Card's listId updated"
    res.status(response.statusCode).send(response)
    logger.info('Card updated')
  } catch (error) {
    logger.error('Update card list id API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    res.status(response.statusCode).send(response)
    logger.error('Card list id could not be updated:', error)
  }
}