import { Request, Response } from 'express'
import { pool } from '../db'
import { IBoard } from '../interface/boardInterface'
import { boardSchema } from '../schema/boardSchema'

export const createBoard = async (req: Request, res: Response) => {
  try {
    const data: IBoard = {
      id: req.body.id,
      title: req.body.title,
      workspaceId: req.body.workspaceId,
      visibility: req.body.visibility,
    }
    const board = await boardSchema.validate(data)
    const newBoard = await pool.query(
      'INSERT INTO board (board_id,title,visibility,workspace) VALUES ($1,$2,$3,$4) RETURNING *',
      [board.id, board.title, board.visibility, board.workspaceId]
    )
    res.status(200).send(newBoard.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getBoard = async (req: Request, res: Response) => {
  try {
    const id = req.params.board_id
    await boardSchema.isValid({ id: req.params.board_id })
    const board = await pool.query('SELECT * FROM board where board_id=$1', [
      id,
    ])

    if (board.rowCount < 1) return res.status(400).send('No board found')
    res.status(200).send(board.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getWorkspaceBoard = async (req: Request, res: Response) => {
  try {
    const id = req.params.workspace_id
    await boardSchema.isValid({ workspaceId: req.params.workspace_id })
    const board = await pool.query('SELECT * FROM board where workspace=$1', [
      id,
    ])
    console.log(board)
    if (board.rowCount < 1) return res.status(400).send('No board found')
    res.status(200).send(board.rows)
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getAllBoard = async (req: Request, res: Response) => {
  try {
    const boards = await pool.query('SELECT * FROM board')
    res.status(200).send(boards.rows)
  } catch (error) {
    res.status(401).send(error)
  }
}
