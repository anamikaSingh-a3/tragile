import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import checkAuth from './controller/authController';

import board from './routes/board';
import card from './routes/card';
import list from './routes/list';
import user from './routes/user';
import workspace from './routes/workspace';
import logger from './utility/logger';

const app: Application = express()

app.use(express.json())
app.use(cors())

// app.use(express.urlencoded());
// npm i body-parser --save

app.use('/api/workspace', checkAuth, workspace)
app.use('/api/board', checkAuth, board)
app.use('/api/list', checkAuth, list)
app.use('/api/card', checkAuth, card)
app.use('/api/user',user)

const port = process.env.PORT || 3002

app.listen(port, () => logger.info(`Listening to port ${port}`))


