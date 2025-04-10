import Message from "../interfaces/Message"

const UserMessages = ({ messages }: { messages: Message[] }) => {
    if (messages.length === 0) return <div>No messages to display.</div>

    return (
        <div>
            <h3>Messages</h3>
            <ul>
                {messages.map((message) => (
                    <li key={message.senderId}>
                        <p><strong>{message.senderId}</strong> ({new Date(message.timestamp).toLocaleString()}):</p>
                        <p>{message.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserMessages