import { NavLink } from 'react-router-dom'
import { savedVideos, SavedVideo } from '.'
import { Sidebar } from '../NewVideo'
import './home.css'

const SavedVideosPage = () => {
  return (
    <div className="flexbox">
      <Sidebar />
      <div className="saved-videos">
        <div className="saved-videos-header">
          <div className="fw-md">Saved Videos</div>{' '}
          <NavLink to="/newvideo">
            <button className="bg-green text-white btn-new">Create New</button>
          </NavLink>
        </div>
        <hr />

        <div className="videos">
          {savedVideos.map((video, index) => (
            <SavedVideo key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SavedVideosPage
