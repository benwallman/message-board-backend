import express from 'express'
import { json, urlencoded } from 'body-parser'

import {
  getAllMessages,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage,
} from './handlers/message'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/:messageId', async (req, res, next) => {
  const { messageId } = req.params
  if (!messageId) return next()
  const message = await getMessage(messageId)
  return res.json(message)
})

app.get('/', async (req, res) => {
  const messages = await getAllMessages()
  res.send(messages)
})

app.post('/', async (req, res) => {
  const { text, user } = req.body
  const messageId = await createMessage(text, user)
  return res.send(messageId)
})

app.put('/:messageId', async (req, res) => {
  const { messageId } = req.params
  const { text } = req.body
  await updateMessage(messageId, text)
  return res.send('Message updated')
})

app.delete('/:messageId', async (req, res) => {
  const { messageId } = req.params
  await deleteMessage(messageId)
  return res.send('Message deleted')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
