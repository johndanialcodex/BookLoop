import { useState } from "react"
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete"
import { useNavigate } from "react-router-dom"
import { postUser } from "../services/postUserService"

const CreateProfileForm = () => {
  const [city, setCity] = useState<string>("")
  const [name, setName] = useState<string>("")
  const navigate = useNavigate()

  const handlePlaceSelected = (place: string) => {
    setCity(place)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !city) {
      alert("Please fill out all fields")
      return
    }

    try {
      const response = await postUser(name, city)
      if (response.status === 201) {
        const userId = response.data._id
        navigate(`/profile/${userId}`)
      } else {
        alert("Something went wrong. Please try again")
      }
    } catch (err) {
      alert("Error creating profile. Please try again")
    }
  }

  return (
    <div>
      <h2>Create An Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <GooglePlacesAutocomplete onPlaceSelected={handlePlaceSelected} />
        </div>
        <div>
          <label htmlFor="fake-email">Email:</label>
          <input
            type="email"
            name="fake-email"
            id="fake-email"
            placeholder="you@example.com"
            autoComplete="off"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="fake-password">Password:</label>
          <input
            type="password"
            name="fake-password"
            id="fake-password"
            placeholder="••••••••"
            autoComplete="off"
            onChange={() => {}}
          />
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>

      <div>
        <p>You'll be swapping in: {city}</p>
      </div>
    </div>
  )
}

export default CreateProfileForm