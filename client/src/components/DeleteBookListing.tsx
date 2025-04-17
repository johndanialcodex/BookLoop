import { useNavigate, useParams } from "react-router-dom"
import { deleteBookListing } from "../services/listingService"
import { useEffect } from "react"

const DeleteBookListing = () => {
  const { id, bookId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const confirmAndDelete = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this book listing?")
      if (confirmDelete && bookId) {
        try {
          await deleteBookListing(bookId)
          navigate(`/profile/${id}`)
        } catch (err) {
          console.error("Error deleting book listing:", err)
        }
      } else {
        navigate(`/profile/${id}`)
      }
    }

    confirmAndDelete()
  }, [bookId, id, navigate])

  return null
}

export default DeleteBookListing
