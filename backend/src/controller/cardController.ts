import { Response, Request } from 'express';
import { pool } from '../db';
import { ICard } from '../interface/cardInterface';
import { cardSchema } from '../schema/cardSchema';

export const createCard = async(req: Request, res: Response) =>{
    try {
        const data:ICard = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            listId: req.body.listId
        }
        const card = await cardSchema.validate(data)
        const newCard = await pool.query(
            'INSERT INTO card (card_id,title,description,due_date,list) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [card.id,card.title,card.description,card.due_date,card.listId]
        )
        res.status(200).send(newCard.rows[0])
    } catch (error) {
        res.status(401).send(error)
    }
}

export const getListCard = async(req:Request, res:Response)=>{
    try {
        const id = req.params.list_id
        await cardSchema.isValid({listId: id})
        const card = await pool.query('SELECT * FROM card where list=$1', [
            id,
          ])
          if (card.rowCount < 1) return res.status(400).send('No card found')
          res.status(200).send(card.rows)
    } catch (error) {
        res.status(401).send(error)
    }
}