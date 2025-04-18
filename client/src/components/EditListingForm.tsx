import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { fetchListingById, updateListingById } from "../services/listingService"
import Booklisting from "../interfaces/Booklisting"

const EditListingForm = () => {
  const { id, listingId } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState<Booklisting>({
    _id: listingId || "",
    title: "",
    author: "",
    genre: "",
    description: "",
    userId: id || ""
  })

  useEffect(() => {
    const fetchListing = async () => {
      if (listingId) {
        const data = await fetchListingById(listingId)
        setForm({
          _id: data._id,
          title: data.title || "",
          author: data.author || "",
          genre: data.genre || "",
          description: data.description || "",
          userId: data.userId || id || ""
        })
      }
    }

    fetchListing()
  }, [listingId, id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (listingId) {
      await updateListingById(listingId, form)
      navigate(`/profile/${id}`)
    }
  }

  return (
    <>
      <h2>Edit Your Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label>Author</label>
          <input name="author" value={form.author} onChange={handleChange} />
        </div>
        <div>
          <label>Genre</label>
          <input name="genre" value={form.genre} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
        <button type="submit">Update Listing</button>
      </form>
      <div>
        <Link to={`/profile/${id}`}>Back to Profile</Link>
      </div>
    </>
  )
}

export default EditListingForm