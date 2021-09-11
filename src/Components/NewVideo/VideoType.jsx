import { useVideo } from '.'

const VideoType = () => {
  const { videoState } = useVideo()
  return (
    <div className="video-types fx-start">
      {videoState.types.map((type, index) => (
        <div key={type + index} className="secondary-btn mg-1">
          {type}
        </div>
      ))}
    </div>
  )
}

export default VideoType
