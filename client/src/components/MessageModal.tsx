import { useState } from 'react'
import MessageForm from './MessageForm'
import "../styles/MessageModal.css"

// MessageModal.tsx
interface MessageModalProps {
  senderId: string
  receiverId: string
  bookTitle?: string
  onClose: () => void
}

const MessageModal = ({
  senderId,
  receiverId,
  onClose,
  bookTitle
}: MessageModalProps) => {
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
            onClose={onClose}  // Pass onClose correctly
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