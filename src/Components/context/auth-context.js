import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('userDetails')) || {
    login: false,
    email: '',
    fullName: '',
  }
  const [authState, setAuthState] = useState(initialState)

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
