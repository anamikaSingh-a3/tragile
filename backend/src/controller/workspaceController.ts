import { Request, Response } from 'express'
import { IWorkspace } from 'tragile-workspace'
import { Workspace } from '../database/models/workspace'
import { pool } from '../db'
// import { IWorkspace } from '../interface/workspaceInterface'
import { workspaceByIdSchema, workspaceSchema } from '../schema/workspaceSchema'
import logger from '../utility/logger'

export const createWorkspace = async (req: Request, res: Response) => {
  logger.info('In create workspace API')

  try {
    const data: IWorkspace = {
      // workspace_id: req.body.workspace_id,
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
      // created_by: req.body.created_by
    }

    // const workspace = await workspaceSchema.validate(data)

    const newWorkspace = await Workspace.query().insert({
      title: data.title,
      type: data.type,
      description: data.description,
      // created_by: data.created_by
    })
    //   'INSERT INTO workspace (workspace_id,title,type,description,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    //   [
    //     workspace.workspace_id,
    //     workspace.title,
    //     workspace.type,
    //     workspace.description,
    //     workspace.createdAt
    //   ]
    // )
    res.status(200).send(newWorkspace)
    logger.info('New workspace created')
    // res.status(response.statusCode).send(response)
  } catch (error) {
    res.status(401).send(error)
    logger.error(error)
  }
}

export const getWorkspace = async (req: Request, res: Response) => {
  logger.info('In get workspace API')
  try {
    const workspace_id = req.params.workspace_id

    await workspaceByIdSchema.isValid(workspace_id)

    const workspace = await pool.query(
      'SELECT * FROM workspace where workspace_id=$1',
      [workspace_id]
    )

    if (workspace.rowCount < 1) {
      logger.warn('No workspace found')
      return res.status(400).send('No workspace found')
    }
    logger.info(`Workspace successfully fetched}`)
    res.status(200).send(workspace.rows[0])
  } catch (error) {
    logger.error(error)
    res.status(401).send(error)
  }
}

export const getAllWorkspace = async (req: Request, res: Response) => {
  logger.info('In get all workspace API')
  try {
    const workspaces = await pool.query('SELECT * FROM workspace')
    if (workspaces.rows.length) {
      logger.info('Workspaces fetched successfully')
      res.status(200).send(workspaces.rows)
    }
  } catch (error) {
    logger.error(error)
    res.status(401).send(error)
  }
}
