import { getAllMessages } from './message'

describe('getAllMessages', () => {
  it('returns all messages', async () => {
    const messages = await getAllMessages()
    expect(messages).toEqual([])
  })
})
