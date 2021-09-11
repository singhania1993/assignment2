import { Route, Routes } from 'react-router'
import './App.css'
import { Login, SignUp, SavedVideosPage, CreateVideo } from './Components'
import MyAccount from './Components/Account/MyAccount'
import PrivateRoute from './Components/private/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/" element={<SavedVideosPage />} />
        <PrivateRoute path="/newvideo" element={<CreateVideo />} />
        <PrivateRoute path="/myaccount" element={<MyAccount />} />
      </Routes>
    </div>
  )
}

export default App
