import { useState } from 'react'
import Message from '../interfaces/Message'
import { sendMessage } from '../services/messageService'

import '../styles/MessageForm.css'

const MessageForm = ({
  senderId,
  receiverId,
  bookTitle,
  onNewMessage,
  onSuccess
}: {
  senderId: string
  receiverId: string
  bookTitle?: string
  onNewMessage?: (msg: Message) => void
  onSuccess?: () => void
  onClose?: () => void
}) => {
  const prefill = bookTitle
    ? `Hi, I'm in your neighborhood and interested in your book: "${bookTitle}". Check out my books in my profile, and send me a message if you'd like to meet up!`
    : ''

  const [userMessage, setUserMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const fullMessage = bookTitle ? `${prefill} ${userMessage}` : userMessage

    try {
      const newMessage = await sendMessage(senderId, receiverId, fullMessage)
      setUserMessage('')
      onNewMessage?.(newMessage)
      onSuccess?.()
    } catch (err) {
      console.error('Failed to send message', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {bookTitle && (
        <>
          <div className="instructions">
            Want to exchange books with this swapper?
            Let them know, and introduce yourself!
            We'll start your message out for you...
          </div>
          <div className="prefill-text">
            <p>{prefill}</p>
          </div>
        </>
      )}
      {!bookTitle && (
        <div className="instructions">
          Reply:
        </div>
      )}
      <div>
        <textarea
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder={bookTitle ? 'Add more information here...' : 'Write your reply...'}
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm