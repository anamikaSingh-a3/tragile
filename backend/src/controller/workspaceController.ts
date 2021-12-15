import { Request, Response } from 'express'
import { ITragileResponse } from 'tragile-response'
import { IWorkspace } from 'tragile-workspace'
import { Workspace } from '../database/models/workspace'
import { pool } from '../db'
import { workspaceByIdSchema, workspaceSchema } from '../schema/workspaceSchema'
import logger from '../utility/logger'

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: "Something went wrong!"
}

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
    logger.error(error)
    response.statusCode = 400
    response.payload = {}
    response.message = "Workspace could not be created!"
    logger.error(error)
    res.status(response.statusCode).send(response)
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
      response.statusCode = 404
      response.payload = {}
      response.message = "No workspace found"
      res.status(response.statusCode).send(response)
      logger.warn('No workspace found')
    }
    else {
      response.statusCode = 200
      response.payload = workspace.rows
      response.message = 'Workspace fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Workspace fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getAllWorkspace = async (req: Request, res: Response) => {
  logger.info('In get all workspace API')
  try {
    const workspaces = await pool.query('SELECT * FROM workspace')
    if (workspaces.rowCount < 1) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No workspace found"
      logger.warn('No workspace found')
      res.status(response.statusCode).send(response)
    }
    else {
      response.statusCode = 200
      response.payload = workspaces.rows
      response.message = 'workspace fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Workspace fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}
