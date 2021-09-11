import { useVideo } from '.'
import { RiArrowDropDownLine } from 'react-icons/ri'

const VideoHeader = ({ isDisabled, setIsDisabled }) => {
  const { videoState } = useVideo()
  return (
    <div className={`video-header bd-btm`}>
      <div className={`video-title fn-lg ${!isDisabled && 'hide'}`}>
        <p className="text-bold">{videoState.title}</p>

        <RiArrowDropDownLine
          className="arrow-dropdown-icon"
          onClick={() => setIsDisabled((state) => !state)}
        />
      </div>
      <div>
        <button className="btn-gray btn-save">Cancel</button>
        <button className="btn-green btn-save">Save</button>
      </div>
    </div>
  )
}

export default VideoHeader
