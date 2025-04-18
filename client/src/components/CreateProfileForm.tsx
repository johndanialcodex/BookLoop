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
    console.log("Form submitted")

    if (!name || !city) {
      alert("Please fill out all fields.")
      return
    }

    try {
      const response = await postUser(name, city)
      console.log("API response:", response)
      if (response.status === 201) {
        const userId = response.data._id
        console.log("Created user ID:", userId)
        console.log("Post response data:", response.data)
        navigate(`/profile/${userId}`)
        console.log("Navigating to profile page...")
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Error creating profile:", err)
      alert("Error creating profile. Please try again.")
    }
  }

  return (
    <div>
      <h2>Create Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
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
          <button type="submit">Create Profile</button>
        </div>
      </form>

      <div>
        <p>You'll be swapping in: {city}</p>
      </div>
    </div>
  )
}

export default CreateProfileForm