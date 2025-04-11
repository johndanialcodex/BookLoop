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
        //navigate("/profile")
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
        <p>Selected City: {city}</p>
      </div>
    </div>
  )
}

export default CreateProfileForm


/*
import { useState } from "react"
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"  // Directly import auth from firebase.ts
import { createUserWithEmailAndPassword } from "firebase/auth"
import axios from "axios"

const CreateProfileForm = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [name, setName] = useState<string>("")
  const navigate = useNavigate()

  const handlePlaceSelected = (place: string) => {
    setCity(place)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !city || !email || !password) {
      alert("Please fill out all fields.")
      return
    }

    try {
      // Step 1: Create user account with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const firebaseUid = userCredential.user.uid // Get the Firebase UID

      // Step 2: Send the user data to backend to create a user profile
      const response = await axios.post("/user", {
        firebaseUid,
        name,
        city,
      })

      if (response.status === 200) {
        navigate("/profile") // Redirect to profile page after successful creation
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
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

*/