interface Message {
  id: string;
  text: string;
  user: string;
}

let messages: Message[] = []

export const getAllMessages = async () => messages
