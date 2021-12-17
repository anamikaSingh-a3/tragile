import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { ITragileResponse } from 'tragile-response'
import { IUser } from 'tragile-user'

import { User } from '../database/models/user'
import { signInSchema, signUpSchema } from '../schema/userSchema'
import logger from '../utility/logger'

const response: ITragileResponse = {
  statusCode: 0,
  payload: {},
  message: 'Something went wrong!'
}
export const signIn = async (req: Request, res: Response) => {
  logger.info('In signIn API')

  try {
    const data = {
      email: req.body.email,
      password: req.body.password
    }
    const userSchema = await signInSchema.validate(data)

    const user = await User.query()
      .select('password')
      .where('email', '=', `${userSchema.email}`)

    const userData = await User.query().where('email', '=', `${userSchema.email}`)

    if (user.length > 0) {
      const isMatch = await bcrypt.compare(userSchema.password, `${user[0].password}`)
      if (!isMatch) {
        response.statusCode = 200
        response.message = 'Wrong email or password'
        response.payload = {}
      } else {
        const token = jwt.sign(userSchema.email, 'secret')
        response.statusCode = 202
        response.message = 'User successfully logged in'
        response.payload = { userData, token: token }
      }
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('User signin API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    logger.error('User not signed:', error)
    res.status(response.statusCode).send(response)
  }
}

export const signUp = async (req: Request, res: Response) => {
  logger.info('In create signUp API')
  try {
    const data: IUser = {
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
      bio: req.body.bio
    }

    const user = await signUpSchema.validate(data)

    const salt = await bcrypt.genSalt(5)
    const hashedPassword = await bcrypt.hash(user.password, salt)

    const emailExists = await User.query().where('email', '=', `${user.email}`)

    if (emailExists.length > 0) {
      response.statusCode = 200
      response.payload = {}
      response.message = 'Email already exists, please login'
      logger.warn('Email already exits')
    } else {
      await User.query().insert({
        name: user.name,
        username: user.username,
        email: user.email,
        password: hashedPassword,
        bio: user.bio
      })
      const token = jwt.sign(user.email, 'secret')
      response.statusCode = 201
      response.payload = token
      response.message = 'User registered'
      logger.info('User signed up')
    }
    res.status(response.statusCode).send(response)
  } catch (error) {
    logger.error('User signup API failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('User not created:', error)
  }
}
