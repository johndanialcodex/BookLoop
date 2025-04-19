import { useEffect, useState } from "react"
import Message from "../interfaces/Message"
import MessageForm from "./MessageForm"
import { fetchMessagesByUser } from "../services/messageService"
import { fetchUsernameById } from "../services/postUserService"
import { Link } from "react-router-dom"

const UserMessages = ({ user }: { user: { _id: string } }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [users, setUsers] = useState<Record<string, string>>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchMessagesByUser(user._id)
        setMessages(res.reverse())

        const userIds = res.flatMap(msg => [msg.senderId, msg.receiverId])
        const uniqueUserIds = [...new Set(userIds)]

        const usersData = await Promise.all(
          uniqueUserIds.map(async (id) => {
            const username = await fetchUsernameById(id)
            return { [id]: username }
          })
        )

        setUsers(Object.assign({}, ...usersData))
      } catch (err) {
        console.error("Error fetching messages or users:", err)
      }
    }

    fetchData()
  }, [user])

  const handleNewMessage = (newMessage: Message) => {
    setMessages(prev => [newMessage, ...prev])
  }

  return (
    <div className="message-box-wrapper">
      <div className="sent-box">
        <h3>Sent Messages</h3>
        <div className="message-box">
          {messages
            .filter(msg => msg.senderId === user._id)
            .map(msg => (
              <div key={msg._id} className="sent">
                <p>
                  <strong>Sent To:</strong>{' '}
                  <Link to={`/swapper/${msg.receiverId}?myId=${user._id}`}>
                    {users[msg.receiverId]}
                  </Link>
                </p>
                <p>{msg.message}</p>
                <p className="timestamp"><strong>Sent at:</strong> {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="received-box">
        <h3>Received Messages</h3>
        <div className="message-box">
          {messages
            .filter(msg => msg.receiverId === user._id)
            .map(msg => (
              <div key={msg._id} className="received">
                <p>
                  <strong>Received From:</strong>{' '}
                  <Link to={`/swapper/${msg.senderId}?myId=${user._id}`}>
                    {users[msg.senderId]}
                  </Link>
                </p>
                <p>{msg.message}</p>
                <p className="timestamp"><strong>Sent at:</strong> {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}</p>
                <MessageForm 
                  senderId={user._id} 
                  receiverId={msg.senderId} 
                  onNewMessage={handleNewMessage}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default UserMessages