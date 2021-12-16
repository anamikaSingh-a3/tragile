import { Request, Response } from 'express'
import { ITragileResponse } from 'tragile-response'
import { IWorkspace } from 'tragile-workspace'
import { Workspace } from '../database/models/workspace';
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
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
    }
    const newWorkspace = await Workspace.query().insert({
      title: data.title,
      type: data.type,
      description: data.description,
    })
    response.statusCode = 201
    response.payload = newWorkspace
    res.status(response.statusCode).send(response)
    logger.info('New workspace created')
  } catch (error) {
    logger.error("Create workspace API failed")
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

    const workspace = await Workspace.query().findById(workspace_id)
    if (!workspace) {
      response.statusCode = 204
      response.payload = {}
      response.message = "No workspace found"
      res.status(response.statusCode).send(response)
      logger.warn('No workspace found')
    }
    else {
      response.statusCode = 200
      response.payload = workspace
      response.message = 'Workspace fetched successfully'
      res.status(response.statusCode).send(response)
      logger.info('Workspace fetched successfully')
    }
  } catch (error) {
    response.statusCode = 400
    response.message = "Check workspace id"
    res.status(response.statusCode).send(response)
    logger.error(error)
  }
}

export const getAllWorkspace = async (req: Request, res: Response) => {
  logger.info('In get all workspace API')
  try {
    const workspaces = await Workspace.query();
    if (workspaces.length == 0) {
      response.statusCode = 204
      response.payload = {}
      response.message = "No workspace found"
      logger.warn('No workspace found')
      res.status(response.statusCode).send(response)
    }
    else {
      response.statusCode = 200
      response.payload = workspaces
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
