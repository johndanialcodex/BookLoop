import { useEffect, useState } from "react"
import Message from "../interfaces/Message"
import axios from "axios"
import MessageForm from "./MessageForm"

const UserMessages = ({ user }: { user: { _id: string } }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [users, setUsers] = useState<Record<string, string>>({})

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/messages?user=${user._id}`)
      setMessages(res.data)

      const userIds = res.data.flatMap((msg: Message) => [msg.senderId, msg.receiverId])
      const uniqueUserIds = [...new Set(userIds)]

      const usersRes = await Promise.all(
        uniqueUserIds.map(async (userId) => {
          const userRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${userId}`)
          return { [userId]: userRes.data.username }
        })
      )
 
      const usersObj = Object.assign({}, ...usersRes)
      setUsers(usersObj)
    }
    
    fetchMessages()
  }, [user])

  const handleNewMessage = (newMessage: Message) => {
    setMessages(prev => [newMessage, ...prev])
  }

  return (
    <div className="message-box-wrapper">
    <div className="message-box">
{messages.map(msg => (
  <div key={msg._id} className={msg.senderId === user._id ? 'sent' : 'received'}>
    <p><strong>{msg.senderId === user._id ? "Sent To" : "Recieved From"}:</strong> {msg.senderId === user._id ? users[msg.receiverId] : users[msg.senderId]}</p>
    <p>{msg.message}</p>
    <p className="timestamp"><strong>Sent at:</strong> {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}</p>
    
    {msg.senderId !== user._id && (
      <>
        <p><strong>Reply below...</strong></p>
        <MessageForm 
          senderId={user._id} 
          receiverId={msg.senderId} 
          onNewMessage={handleNewMessage}
        />
      </>
    )}
  </div>
))}
    </div>
    </div>
  )
}

export default UserMessages