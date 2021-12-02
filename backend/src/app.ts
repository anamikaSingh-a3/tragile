import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import workspace from './routes/workspace'
import board from './routes/board'
import list from './routes/list'
import card from './routes/card'


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


const port = process.env.PORT || 3002

app.listen(port, () => console.log(`Listening to port ${port}`))

