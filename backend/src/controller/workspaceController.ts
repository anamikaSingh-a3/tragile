import { Request, Response } from 'express';
import { ITragileResponse } from 'tragile-response';
import { IWorkspace } from 'tragile-workspace';

import { Workspace } from '../database/models/workspace';
import { createWorkspaceSchema, getWorkspaceSchema } from '../schema/workspaceSchema';
import logger from '../utility/logger';

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
      created_by: req.body.created_by
    }
    const workspace = await createWorkspaceSchema.validate(data)
    const newWorkspace = await Workspace.query().insert({
      title: workspace.title,
      type: workspace.type,
      description: workspace.description,
      created_by: workspace.created_by
    })
    response.statusCode = 201
    response.payload = newWorkspace
    response.message = "Workspace created"
    logger.info('New workspace created')
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Create board API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    logger.error('Workspace could not be created:', error)
    res.status(response.statusCode).send(response)
  }
}

export const getWorkspace = async (req: Request, res: Response) => {
  logger.info('In get workspace API')
  try {
    const workspace_id = req.params.workspace_id

    const workspaceSchema = await getWorkspaceSchema.validate({workspace_id})
    const workspace = await Workspace.query().findById(workspaceSchema.workspace_id)
    
    if (!workspace) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No workspace found"
      logger.warn('No workspace found')
    }
    else {
      response.statusCode = 200
      response.payload = workspace
      response.message = 'Workspace fetched successfully'
      logger.info('Workspace fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get workspace API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Workspace could not be fetched:', error)
  }
}

export const getAllWorkspace = async (req: Request, res: Response) => {
  logger.info('In get all workspace API')
  try {
    const workspaces = await Workspace.query();
    if (workspaces.length == 0) {
      response.statusCode = 404
      response.payload = {}
      response.message = "No workspace found"
      logger.warn('No workspace found')
    }
    else {
      response.statusCode = 200
      response.payload = workspaces
      response.message = 'workspace fetched successfully'
      logger.info('Workspace fetched successfully')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('Get all workspace API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Workspace could not be fetched:', error)
  }
}
