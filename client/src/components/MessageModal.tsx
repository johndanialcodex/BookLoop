import { useState } from 'react'
import MessageForm from './MessageForm'

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
            onClose={onClose}
          />
        ) : (
          <p>Message sent successfully!</p>
        )}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  )
}

export default MessageModal