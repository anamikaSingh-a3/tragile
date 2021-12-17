import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ITragileResponse } from 'tragile-response';
import { IUser } from 'tragile-user';

import { User } from '../database/models/user';
import logger from '../utility/logger';


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
        const user = await User.query()
            .select('password')
            .where('email', '=', `${data.email}`)
        const userData = await User.query().where('email', '=', `${data.email}`)
        if (user.length > 0) {
            const isMatch = await bcrypt.compare(data.password, `${user[0].password}`)
            if (!isMatch) {
                response.statusCode = 200
                response.message = 'Wrong email or password'
                response.payload = {}
                res.status(response.statusCode).send(response)
            } else {
                const token = jwt.sign(data.email, 'secret')
                response.statusCode = 202
                response.message = 'User successfully logged in'
                response.payload = { userData, token: token }
                res.status(response.statusCode).send(response)
            }
        }
    } catch (error) {
        logger.error('User signup API failed')
        response.statusCode = 400
        response.payload = {}
        response.message = 'User could not be created!'
        logger.error(error)
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
        const salt = await bcrypt.genSalt(5)
        const hashedPassword = await bcrypt.hash(data.password, salt)

        const emailExists = await User.query().where('email', '=', `${data.email}`)

        if (emailExists.length > 0) {
            response.statusCode = 200
            response.payload = {}
            response.message = 'Email already exists, please login'
            res.status(response.statusCode).send(response)
            logger.warn('Email already exits')


        } else {
            await User.query().insert({
                name: data.name,
                username: data.username,
                email: data.email,
                password: hashedPassword,
                bio: data.bio
            })
            const token = jwt.sign(data.email, 'secret')
            response.statusCode = 201
            response.payload = token


            response.message = 'User registered'
            res.status(response.statusCode).send(response)
            logger.info('User signed up')
        }
    } catch (error) {
        logger.error('User signup API failed')
        response.statusCode = 400
        response.payload = {}
        response.message = 'User could not be created!'
        logger.error(error)
        res.status(response.statusCode).send(response)
    }
}
