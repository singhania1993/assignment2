import { NavLink } from 'react-router-dom'
import { useAuth } from '../context'
const AccountHeader = () => {
  const { setAuthState } = useAuth()
  const logout = () => {
    localStorage.removeItem('userDetails')
    setAuthState({ login: false, email: '', fullName: '' })
  }
  return (
    <div className="acc-header">
      <p className="heading">My Account</p>
      <NavLink to="/signin">
        <p className="text-red" onClick={() => logout()}>
          Logout
        </p>
      </NavLink>
    </div>
  )
}
export default AccountHeader
