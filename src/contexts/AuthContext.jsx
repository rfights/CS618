import { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext({
  token: null,
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [token, setTokenState] = useState(() => localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  const setToken = (newToken) => {
    setTokenState(newToken)
  }

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export function useAuth() {
  const { token, setToken } = useContext(AuthContext)
  return [token, setToken]
}
