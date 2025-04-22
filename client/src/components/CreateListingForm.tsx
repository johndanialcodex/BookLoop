import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { postBookListing } from "../services/listingService"
import { Link } from "react-router-dom"

const CreateListingForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    userId: id || ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await postBookListing(form)
      navigate(`/profile/${id}`)
      setForm({
        title: "",
        author: "",
        genre: "",
        description: "",
        userId: id || ""
      })
    } catch (err) {
      console.error("Error creating book listing:", err)
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="listing-form-content">
      <div>
        <label className="listing-label">Title: </label>
        <input name="title" value={form.title} className="listing-input" onChange={handleChange} />
      </div>
      <div>
        <label className="listing-label">Author: </label>
        <input name="author" value={form.author} className="listing-input" onChange={handleChange} />
      </div>
      <div>
        <label className="listing-label">Genre: </label>
        <input name="genre" value={form.genre} className="listing-input" onChange={handleChange} />
      </div>
      <div>
        <label className="listing-label">Description: </label>
        <textarea className="listing-textarea" name="description" value={form.description} onChange={handleChange} placeholder="Write a brief description of the quality of your book, and any other important information..." />
      </div>
      <button className="listing-submit" type="submit">Submit Your Book</button>
    </form>
    <div><Link to={`/profile/${id}`} className="back-to-profile">Back to Profile</Link></div>
    </>
  )
}

export default CreateListingForm