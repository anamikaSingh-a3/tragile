import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!..')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening to port ${port}`))
