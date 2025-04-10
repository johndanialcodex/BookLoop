import UserMessages from "./UserMessages"
import Message from "../interfaces/Message"

const MessagesDisplay = ({ messages }: { messages: Message[] }) => {
    return (
        <div>
            <div>
                {messages.map((message) => (
                    <UserMessages key={message.senderId} messages={[message]} />
                ))}
            </div>
        </div>
    )
}

export default MessagesDisplay