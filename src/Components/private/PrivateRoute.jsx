import { Navigate, Route } from 'react-router'
import { useAuth } from '../context'

const PrivateRoute = ({ path, element }) => {
  const {
    authState: { login },
  } = useAuth()
  console.log({ login, path, element })
  return login ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" />
  )
}

export default PrivateRoute
