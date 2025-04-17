import { useState } from 'react'
import MessageForm from './MessageForm'

const MessageModal = ({
  senderId,
  receiverId,
  onClose,
  bookTitle
}: {
  senderId: string
  receiverId: string
  onClose: () => void
  bookTitle?: string
}) => {
  const [messageSent, setMessageSent] = useState(false)

  return (
    <div className="modal">
      <div className="modal-content">
        {!messageSent ? (
          <MessageForm
            senderId={senderId}
            receiverId={receiverId}
            bookTitle={bookTitle}
            onSuccess={() => setMessageSent(true)}
            onClose={onClose}
          />
        ) : (
          <p>Message sent successfully!</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default MessageModal