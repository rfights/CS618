import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../contexts/AuthContext.jsx'
import { User } from './User.jsx'

export function Header() {
  const [token, setToken] = useAuth()

  if (token) {
    const { sub } = jwtDecode(token)
    return (
      <div>
        <h1>Welcome to My Blog!</h1>
        <div>
          Logged in as <User id={sub} />
          <br />
          <button onClick={() => setToken(null)}>Logout</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <Link to='/login'>Log In</Link> | <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
