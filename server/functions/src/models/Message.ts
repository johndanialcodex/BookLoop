import { Schema, model } from "mongoose"

const MessageSchema = new Schema(
  {
    senderId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Referencing MongoDB _id
    receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Referencing MongoDB _id
    message: { type: String, required: true },
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