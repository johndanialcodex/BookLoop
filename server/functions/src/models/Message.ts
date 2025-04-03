import { Schema, model } from "mongoose"

const MessageSchema = new Schema(
	{
		senderId: { type: String, required: true },
		receiverId: { type: String, required: true },
		message: { type: String, required: true }
	},
	{ timestamps: true }
)

const Message = model("Message", MessageSchema)

export default Message

/*
{
"senderId": "String", // Firebase UID
"receiverId": "String", // Firebase UID
"message": "String",
"timestamp": "Date"
}
*/