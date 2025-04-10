import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"
import { auth } from "../firebase"
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/profile")
    } catch (err: any) {
		
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/profile")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        <a href="/create-profile">Don't have an account? Create one</a>
        <Link to="/">Go Back to Home Page</Link>
      </div>
    </>
  )
}

export default Login