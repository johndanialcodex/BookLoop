import { useState } from 'react'
import MessageForm from './MessageForm'

const MessageModal = ({
  senderId,
  receiverId,
  onClose,
}: {
  senderId: string
  receiverId: string
  onClose: () => void
}) => {
  const [messageSent, setMessageSent] = useState(false)

  return (
    <div className="modal">
      <div className="modal-content">
        {!messageSent ? (
          <MessageForm
            senderId={senderId}
            receiverId={receiverId}
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