import { FaEllipsisH } from 'react-icons/fa'
import './home.css'

const SavedVideo = ({ video }) => {
  return (
    <div className="saved-video">
      <div className="img-container">
        <img src={video.img} alt={video.desc} className="actor-img" />
        <FaEllipsisH className="h-ellipsis" />
      </div>
      <p className="fs-lg">{video.desc}</p>
      <div className="video-types">
        {video.types.map((type, index) => (
          <div key={type + index} className="secondary-btn mg-1">
            {type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedVideo
