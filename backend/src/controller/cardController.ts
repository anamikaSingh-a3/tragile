import { Request, Response } from 'express';
import { ICard } from 'tragile-card';
import { ITragileResponse } from 'tragile-response';

import { Card } from '../database/models/card';
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
      list: req.body.list
    }

    const newCard = await Card.query().insert({
      title: data.title,
      description: data.description,
      list: data.list
    })

    console.log("newCard", newCard)

    response.statusCode = 201
    response.payload = newCard
    response.message = "Card created"
    res.status(response.statusCode).send(response)
    logger.info('Card created')
  } catch (error) {
    response.statusCode = 400
    response.payload = {}
    response.message = "Card could not be created!"
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getListCard = async (req: Request, res: Response) => {
  logger.info('In get list card API')
  try {
    const id = req.params.list_id
    const card = await Card.query().where('list', '=', `${id}`)

    if (!card.length) {
      response.statusCode = 204
      response.payload = {}
      response.message = "No Card found"
      res.status(response.statusCode).send(response)
      logger.warn('No card found')
    }
    else {
      response.statusCode = 200
      response.payload = card
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
    const cards = await Card.query()
    if (cards.length == 0) {
      response.statusCode = 204
      response.payload = {}
      response.message = "No card found"
      logger.warn('No card found')
      res.status(response.statusCode).send(response)
    }
    else {
      response.statusCode = 200
      response.payload = cards
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

    const card = await Card.query().findById(id).patchAndFetchById(id, {
      description: desc
    })
    response.statusCode = 200
    response.payload = card
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

    const card = await Card.query().findById(id).patchAndFetchById(id, {
      list: listId
    })
    response.statusCode = 200
    response.payload = card
    response.message = "Card's listId updated"
    res.status(response.statusCode).send(response)
    logger.info('Card updated')
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}