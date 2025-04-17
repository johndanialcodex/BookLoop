import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const EditListingForm = () => {
  const { id, listingId } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    userId: id || ""
  })

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings/${listingId}`)
        setForm(response.data)
      } catch (error) {
        console.error("Error fetching listing:", error)
      }
    }

    if (listingId) {
      fetchListing()
    }
  }, [listingId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/bookListings/${listingId}`, form)
      navigate(`/profile/${id}`)
    } catch (err) {
      console.error("Error updating book listing:", err)
    }
  }

  return (
    <>
      <h2>Edit Your Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input name="title" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label>Author: </label>
          <input name="author" value={form.author} onChange={handleChange} />
        </div>
        <div>
          <label>Genre: </label>
          <input name="genre" value={form.genre} onChange={handleChange} />
        </div>
        <div>
          <label>Description: </label>
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
        <button type="submit">Update Listing</button>
      </form>
      <div><Link to={`/profile/${id}`}>Back to Profile</Link></div>
    </>
  )
}

export default EditListingForm
