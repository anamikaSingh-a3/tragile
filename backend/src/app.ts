import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import board from './routes/board';
import card from './routes/card';
import list from './routes/list';
import user from './routes/user';
import workspace from './routes/workspace';
import logger from './utility/logger';

const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!..')
})

app.use('/api/workspace', workspace)
app.use('/api/board', board)
app.use('/api/list', list)
app.use('/api/card',card)
app.use('/api/user',user)

const port = process.env.PORT || 3002

app.listen(port, () => logger.info(`Listening to port ${port}`))


