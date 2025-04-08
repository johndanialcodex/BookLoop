import { useState } from "react";
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete"

const CreateProfileForm = () => {
  const [city, setCity] = useState<string>("")

  const handlePlaceSelected = (place: string) => {
    setCity(place)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send city and other profile data to backend)
    console.log("Profile Created! City:", city)
  }

  return (
    <>
      <h2>Create Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City:</label>
          <GooglePlacesAutocomplete onPlaceSelected={handlePlaceSelected} />
        </div>
        <div>
          <button type="submit">Create Profile</button>
        </div>
      </form>
      <div>
        <p>Selected City: {city}</p>
      </div>
    </>
  )
}

export default CreateProfileForm