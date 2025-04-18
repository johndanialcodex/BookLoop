import axios from 'axios'
import Message from '../interfaces/Message'

const API_BASE = import.meta.env.VITE_API_BASE_URL

export const fetchMessagesByUser = async (userId: string): Promise<Message[]> => {
  const res = await axios.get(`${API_BASE}/messages?user=${userId}`)
  return res.data
}