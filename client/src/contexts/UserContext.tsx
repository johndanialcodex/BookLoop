import { createContext, useState, ReactNode, useEffect } from "react"
import { User } from "../interfaces/User"

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user`)
        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
        } else {
          console.error("Failed to fetch user data")
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}