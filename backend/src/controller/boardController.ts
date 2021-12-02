import { Request, Response } from 'express'
import { pool } from '../db'
import { IBoard } from '../interface/boardInterface'
import {
  boardSchema,
  getBoardSchema,
  getWorkspaceBoardSchema
} from '../schema/boardSchema'

export const createBoard = async (req: Request, res: Response) => {
  try {
    const data: IBoard = {
      board_id: req.body.board_id,
      title: req.body.title,
      workspaceId: req.body.workspaceId,
      visibility: req.body.visibility
    }
    const board = await boardSchema.validate(data)
    const newBoard = await pool.query(
      'INSERT INTO board (board_id,title,visibility,workspace) VALUES ($1,$2,$3,$4) RETURNING *',
      [board.board_id, board.title, board.visibility, board.workspaceId]
    )
    res.status(200).send(newBoard.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getBoard = async (req: Request, res: Response) => {
  try {
    const board_id = req.params.board_id
    await getBoardSchema.isValid(board_id)
    const board = await pool.query('SELECT * FROM board where board_id=$1', [
      board_id
    ])

    if (board.rowCount < 1) return res.status(400).send('No board found')
    res.status(200).send(board.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getWorkspaceBoard = async (req: Request, res: Response) => {
  try {
    const workspace_id = req.params.workspace_id
    await getWorkspaceBoardSchema.isValid(workspace_id)
    const board = await pool.query('SELECT * FROM board where workspace=$1', [
      workspace_id
    ])
    if (board.rowCount < 1) return res.status(400).send([])
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
