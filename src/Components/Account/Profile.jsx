import { useState } from 'react'
import { GrFormEdit } from 'react-icons/gr'
import Email from './Input/Email'
import { useAuth } from '../context'
import FirstName from './Input/FirstName'
import LastName from './Input/LastName'
const Profile = () => {
  const { authState } = useAuth()
  const [state, setState] = useState({
    email: authState.email,
    fullname: authState.fullname,
  })
  return (
    <div>
      <div className="profile">
        <img
          src="https://res.cloudinary.com/ankitneog/image/upload/v1627040297/My_Image_qtnqch.jpg"
          alt={state.fullname}
          className="avatar-img"
        />
        <div className="edit-icon">
          <GrFormEdit className="edit-icon-img" />
        </div>
      </div>
      <div className="profile-details">
        <FirstName className="profile-detail" prop={{ state, setState }} />
        <LastName className="profile-detail" prop={{ state, setState }} />
        <Email className="profile-detail" prop={{ state, setState }} />
      </div>
      <div>
        <button className="btn-savechanges">Save Changes</button>
      </div>
    </div>
  )
}

export default Profile
