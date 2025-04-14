import { useState } from "react"
import axios from "axios"
import Message from "../interfaces/Message"

const MessageForm = ({
  senderId,
  receiverId,
  onNewMessage,
  onSuccess // 👈 add this new prop
}: {
  senderId: string,
  receiverId: string,
  onNewMessage?: (msg: Message) => void,
  onSuccess?: () => void // 👈 optional success callback
}) => {
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/messages`, {
        senderId,
        receiverId,
        message
      })
      setMessage("")
      onNewMessage?.(res.data) // only call if it's provided
      onSuccess?.() // 👈 trigger the success state in the modal
    } catch (err) {
      console.error("Failed to send message", err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm