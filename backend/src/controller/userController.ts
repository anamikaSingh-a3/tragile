import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { ITragileResponse } from 'tragile-response'
import { IUser, IVerifyUser } from 'tragile-user'
import { SECRET, USER_EMAIL, USER_PASSWORD } from '../constants'

import { User } from '../database/models/user'
import { signInSchema, signUpSchema, verifyEmailSchema } from '../schema/userSchema'
import logger from '../utility/logger'

import nodemailer from 'nodemailer'

const response: ITragileResponse = {
  statusCode: 400,
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

    if (userData.length === 0) {
      response.statusCode = 401
      response.message = 'Wrong email or password'
      response.payload = {}
      logger.warn('Wrong email or password')
    }
    else if (user.length > 0) {
      const isMatch = await bcrypt.compare(userSchema.password, `${user[0].password}`)
      if (!isMatch) {
        response.statusCode = 401
        response.message = 'Wrong email or password'
        response.payload = {}
        logger.warn('Wrong email or password')
      } else {
        const token = jwt.sign(userSchema.email, SECRET as string)
        response.statusCode = 200
        response.message = 'User successfully logged in'
        response.payload = { userData, token: token }
        logger.info('User successfully logged in')
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
      const token = jwt.sign(user.email, SECRET as string)
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

export const sendVerificationEmail = async (req: Request, res: Response) => {
  logger.info('In verify email API')
  try {
    const data: IVerifyUser = {
      email: req.body.email,
      name: req.body.name
    }

    const user = await verifyEmailSchema.validate(data)

    const userToken = jwt.sign({ email: req.body.email, name: req.body.name }, SECRET as string)

    const link = `http://localhost:3000/verify/${userToken}`

    const mailOptions = {
      from: 'Anamika',
      to: `${user.email}`,
      subject: 'Tragile - verify your email',
      html: `<b> Hello, from Tragile. Please verify your email by clicking on the below link.</b><a href=${link}>Click here to verify</a>`
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error('Error:', error)
        response.statusCode = 404
        response.payload = {}
        response.message = 'Email verification failed'
      }
      else {
        logger.info('Email verification sent')
        response.statusCode = 200
        response.payload = userToken
        response.message = 'Email verification sent'
      }
      res.status(response.statusCode).send(response)
    })
  } catch (error) {
    logger.error('Send verification mail api failed')
    response.statusCode = 400
    response.payload = `${error}`
    response.message = `${error}`
    res.status(response.statusCode).send(response)
    logger.error('Email not sent:', error)
  }
}

export const verifyEmailToken = async (req: Request, res: Response) => {
  try {
    const userToken = req.params.userToken;
    const user = jwt.verify(userToken, SECRET as string)

    response.statusCode = 200
    response.payload = user
    response.message = "Email is verified",
      res.status(response.statusCode).send(response)

  } catch (error) {
    logger.error('Email verification failed')
    response.statusCode = 400
    response.payload = {}
    response.message = `${error}`
    logger.error('Verification failed:', error)
    res.status(response.statusCode).send(response)
  }
}