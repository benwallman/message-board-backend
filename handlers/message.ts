import { v4 as uuid } from 'uuid'

interface Message {
  id: string;
  text: string;
  user: string;
}

let messages: Message[] = []

export const getAllMessages = async () => messages

// N.B. For unit testing only !!!
export const _clearMessages = async () => {
  await updateMessages([])
}

const updateMessages = async (newMessages: Message[]) => {
  messages = newMessages
}

export const createMessage = async (text: string, user: string) => {
  const id = uuid()
  const message = { id, text, user }
  const newMessages = [...messages, message]
  updateMessages(newMessages)
  return id
}

export const getMessage = async (id: string) => {
  const message = messages.find(message => message.id === id)
  if (!message) throw new Error('Message not found')
  return message
}

export const updateMessage = async (id: string, text: string) => {
  const message = await getMessage(id)
  const newMessage = { ...message, text }
  const newMessages = [...messages].map(message => message.id === id ? newMessage : message)
  updateMessages(newMessages)
}

export const deleteMessage = async (id: string) => {
  const refinedMessages = [...messages].filter((message, index) => message.id !== id)
  updateMessages(refinedMessages)
}
