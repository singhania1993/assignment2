import { icon, avatar } from '../../images'
import { BsCameraVideo, BsCollectionPlay } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-options">
        <img src={icon} alt="Figma Icon" className="nav-option" />
        <NavLink to="/newvideo">
          <BsCameraVideo className="nav-option nav-icon" />
        </NavLink>
        <NavLink to="/">
          <BsCollectionPlay className="nav-option nav-icon" />
        </NavLink>
      </div>
      <NavLink to="/myaccount">
        <img src={avatar} alt="Ankit Singhania" className="avatar-icon" />
      </NavLink>
    </div>
  )
}

export default Sidebar
