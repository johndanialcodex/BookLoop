import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { postBookListing } from "../services/listingService"

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
      <button type="submit">Create Listing</button>
    </form>
  )
}

export default CreateListingForm

/*
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createBookListing } from "../services/listingService"

const CreateListingForm = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    city: "",
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBookListing(form)

      navigate("/profile")

      setForm({
        title: "",
        author: "",
        genre: "",
        description: "",
        city: "",
      })
    } catch (err) {
      console.error("Error creating book listing:", err)
    }
  }

  return (
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
      <div>
        <label>City: </label>
        <input name="city" value={form.city} onChange={handleChange} />
      </div>
      <button type="submit">Create Listing</button>
    </form>
  )
}

export default CreateListingForm

*/