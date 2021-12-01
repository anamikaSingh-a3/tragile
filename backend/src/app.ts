import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import workspace from './routes/workspace'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!..')
})

app.use('/api/workspace', workspace)

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Listening to port ${port}`))

