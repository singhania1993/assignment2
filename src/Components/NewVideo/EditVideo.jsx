import './video.css'
import { VideoDesc, VideoType, useVideo } from '.'

const EditVideoTitle = ({ isDisabled, setIsDisabled }) => {
  const { videoState, setVideoState } = useVideo()
  return (
    <div className="edit-video-details">
      <div className="video-title">
        <input
          className="video-input"
          disabled={isDisabled}
          type="text"
          placeholder="Video Title"
          value={videoState.title}
          onChange={(e) =>
            setVideoState((state) => ({
              ...state,
              state,
              title: e.target.value,
            }))
          }
        />
      </div>
      <VideoDesc />
      <VideoType />
      <button
        className="bg-green text-white btn-save"
        onClick={() => setIsDisabled((state) => !state)}
      >
        Save
      </button>
    </div>
  )
}

export default EditVideoTitle
