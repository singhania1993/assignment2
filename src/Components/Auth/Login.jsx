import { useState } from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useAuth, Email, Password } from '.'
import './login.css'

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { setAuthState } = useAuth()
  const navigate = useNavigate()

  const loginUser = () => {
    if (state.email && state.password) {
      if (
        state.email === 'ankit.singhania@smartcow.com' &&
        state.password === 'Welcome'
      ) {
        const obj = {
          login: true,
          email: state.email,
          fullname: 'Ankit Singhania',
        }
        localStorage.setItem('userDetails', JSON.stringify(obj))
        setAuthState(obj)
        navigate('/')
      } else {
        setError('Incorrect email or password')
      }
    } else {
      setError('Please fill all the required fields')
    }
  }
  return (
    <div className="login">
      <Email prop={{ state, setState, setError }} />
      <Password prop={{ state, setState, setError, label: 'Forgot?' }} />
      <div className="error-msg color-red">{error}</div>
      <button
        className="bg-green text-white btn-login"
        onClick={() => loginUser()}
      >
        Login
      </button>
      <div className="login-footer-text">
        New here?{' '}
        <NavLink className="nav-link" to="/signup">
          <span className="blue">Signup</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Login
