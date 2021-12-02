import { Response, Request } from 'express'
import { pool } from '../db'
import { ICard } from '../interface/cardInterface'
import { cardSchema } from '../schema/cardSchema'

export const createCard = async (req: Request, res: Response) => {
  try {
    const data: ICard = {
      card_id: req.body.card_id,
      title: req.body.title,
      description: req.body.description,
      list_id: req.body.list_id
    }
    const card = await cardSchema.validate(data)
    const newCard = await pool.query(
      'INSERT INTO card (card_id,title,description,due_date,list) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [card.card_id, card.title, card.description, card.due_date, card.list_id]
    )
    res.status(200).send(newCard.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getListCard = async (req: Request, res: Response) => {
  try {
    const id = req.params.list_id
    await cardSchema.isValid({ listId: id })
    const card = await pool.query('SELECT * FROM card where list=$1', [id])
    if (card.rowCount < 1) return res.status(400).send('No card found')
    res.status(200).send(card.rows)
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getAllCard = async (req: Request, res: Response) => {
  try {
    const cards = await pool.query('SELECT * FROM card')
    if (cards.rows.length > 0) res.status(200).send(cards.rows)
  } catch (error) {
    res.status(401).send(error)
  }
}

export const updateCard = async (req: Request, res: Response) => {
  try {
    const id = req.body.card_id
    const desc = req.body.description
    await cardSchema.isValid({ card_id: id })
    const card = await pool.query(
      'UPDATE card SET description=$1 WHERE card_id=$2 RETURNING *',
      [desc, id]
    )
    res.status(200).send(card.rows)
  } catch (error) {
    res.status(401).send(error)
  }
}