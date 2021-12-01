import { Request, Response } from 'express'
import { pool } from '../db'
import { IWorkspace } from '../interface/workspaceInterface'
import { workspaceByIdSchema, workspaceSchema } from '../schema/workspaceSchema'

export const createWorkspace = async (req: Request, res: Response) => {
  try {
    const data: IWorkspace = {
      workspace_id: req.body.workspace_id,
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
    }

    const workspace = await workspaceSchema.validate(data)

    const newWorkspace = await pool.query(
      'INSERT INTO workspace (workspace_id,title,type,description,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [
        workspace.workspace_id,
        workspace.title,
        workspace.type,
        workspace.description,
        workspace.createdAt,
      ]
    )
    res.status(200).send(newWorkspace.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getWorkspace = async (req: Request, res: Response) => {
  try {
    const workspace_id = req.params.workspace_id

    await workspaceByIdSchema.isValid(workspace_id)

    const workspace = await pool.query(
      'SELECT * FROM workspace where workspace_id=$1',
      [workspace_id]
    )

    if (workspace.rowCount < 1)
      return res.status(400).send('No workspace found')
    res.status(200).send(workspace.rows[0])
  } catch (error) {
    res.status(401).send(error)
  }
}

export const getAllWorkspace = async (req: Request, res: Response) => {
  try {
    const workspaces = await pool.query('SELECT * FROM workspace')
    if (workspaces.rows.length > 0) res.status(200).send(workspaces.rows)
  } catch (error) {
    res.status(401).send(error)
  }
}
