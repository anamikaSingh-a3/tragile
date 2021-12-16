import logger from '../utility/logger'
import { Request, Response } from 'express'
import { IUser } from '../interface/userInterface'
import { userSchema } from '../schema/userSchema'
import { pool } from '../db'

export const signIn = () => {
    logger.info('In create signIn API')
}

export const signUp = async (req: Request, res: Response) => {
    logger.info('In create signUp API')
    try {
        const data: IUser = {
            user_id: req.body.user_id,
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            password: req.body.password,
            bio: req.body.bio
        }

        const newUser = await pool.query(
            'INSERT INTO users (user_id,email) VALUES ($1,$2) RETURNING *',
            [data.user_id,data.email]
        )

        logger.info('38')
        console.log("newUSer",newUser)
        res.status(200).send(newUser.rows[0])
        logger.info(newUser.rows[0])
        logger.info('User signed up')
    } catch (error) {
        res.status(401).send(error)
        logger.error(error)
    }
}
