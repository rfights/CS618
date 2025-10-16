import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'
import { eventRoutes } from './routes/events.js'

const app = express()
app.use(
  cors({
    origin:
      'https://cautious-space-engine-x5rwjq5jv7rjf5qq-5173.app.github.dev',
  }),
)
app.use(bodyParser.json())

postsRoutes(app)
userRoutes(app)
eventRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export { app }
