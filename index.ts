import express from 'express'
import { json, urlencoded } from 'body-parser'

import {
  getAllMessages,
} from './handlers/message'


const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const messages = await getAllMessages()
  res.send(messages)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
