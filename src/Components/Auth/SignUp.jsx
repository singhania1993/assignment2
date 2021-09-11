import { useState } from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useAuth, Email, Password } from '.'
import { FullName } from './InputFields'
import './login.css'
const SignUp = () => {
  const [state, setState] = useState({ fullname: '', email: '', password: '' })
  const [error, setError] = useState('')
  const { setAuthState } = useAuth()
  const navigate = useNavigate()

  const newUserSignup = () => {
    if (state.fullname && state.email && state.password) {
      const obj = { login: true, email: state.email, fullname: state.fullname }
      localStorage.setItem('userDetails', JSON.stringify(obj))
      setAuthState(obj)
      navigate('/')
    } else {
      setError('Please fill all the required fields')
    }
  }

  return (
    <div className="login">
      <FullName prop={{ state, setState, setError }} />
      <Email prop={{ state, setState, setError }} />
      <Password prop={{ state, setState, setError, label: 'Strong' }} />
      <div className="error-msg color-red">{error}</div>
      <button
        className="bg-green text-white btn-login"
        onClick={() => newUserSignup()}
      >
        Signup
      </button>
      <div className="login-footer-text">
        Already User?{' '}
        <NavLink className="nav-link" to="/signin">
          <span className="blue">Login</span>
        </NavLink>
      </div>
    </div>
  )
}

export default SignUp
