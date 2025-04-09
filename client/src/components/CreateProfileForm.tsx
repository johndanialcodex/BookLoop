import { useState } from "react"
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import axios from "axios"

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
      alert("Please enter a name and select a city.")
      return
    }

    try {
      const response = await axios.post("/profile", {
        firebaseUid: auth.currentUser?.uid,
        name,
        city,
      })

      if (response.status === 200) {
        navigate("/profile")
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
          <label htmlFor="city">City:</label>
          <GooglePlacesAutocomplete onPlaceSelected={handlePlaceSelected} />
        </div>
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
          <button type="submit">Create Profile</button>
        </div>
      </form>

      <div>
        <p>Selected City: {city}</p>
      </div>
    </div>
  )
}

export default CreateProfileForm