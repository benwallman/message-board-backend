import { v4 as uuid } from 'uuid'

import {
  getAllMessages,
  createMessage,
  getMessage,
  deleteMessage,
  _clearMessages,
} from './message'

beforeEach(() => {
  _clearMessages()
})

describe('getAllMessages', () => {
  it('returns all messages', async () => {
    const messages = await getAllMessages()
    expect(messages).toEqual([])
  })
})

describe('createMessage', () => {
  it('creates a message', async () => {
    const initialMessages = await getAllMessages()
    expect(initialMessages.length).toEqual(0)

    await createMessage('hello', uuid())
    const messages = await getAllMessages()
    expect(messages.length).toEqual(1)
  })
})

describe('getMessage', () => {
  it('gets a message by the ID', async () => {
    const messageId = await createMessage('Hello World', uuid())
    const message = await getMessage(messageId)
    expect(message.text).toEqual('Hello World')
  })
})

describe('deleteMessage', () => {
  it('deletes a message by the ID', async () => {
    const messageId = await createMessage('Hello World', uuid())
    const initialMessages = await getAllMessages()
    expect(initialMessages.length).toEqual(1)

    await deleteMessage(messageId)
    const messages = await getAllMessages()
    expect(messages.length).toEqual(0)
  })
})
