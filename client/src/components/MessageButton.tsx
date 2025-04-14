const MessageButton = ({ receiverId, onClick }: { receiverId: string, onClick: (receiverId: string) => void }) => {
  return (
    <button onClick={() => onClick(receiverId)}>
      Message this swapper about this book!
    </button>
  )
}

export default MessageButton