import express, { Application, Request, Response } from 'express'
import board from './routes/board'
import workspace from './routes/workspace'
const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!..')
})

app.use('/api/workspace', workspace)
app.use('/api/board', board)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening to port ${port}`))
