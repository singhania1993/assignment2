import { useVideo } from '.'

const VideoPreview = () => {
  const { videoState } = useVideo()
  return (
    <div className="video-preview">
      <div className="img-container">
        <img
          src={videoState.actorImg}
          alt={videoState.desc}
          className="actor-img"
        />
        <button className="btn-bg-white text-purple pd-05-1 ft-lg btn-preview">
          Preview
        </button>
      </div>
      <div className="desc-container bg-white">
        <textarea
          className="fs-lg br-rad-1 h-4 mt-1 p-1 textarea-desc"
          placeholder="Enter a description"
        ></textarea>
        <div className="flex">
          <button className="btn-listen m-1">Listen</button>
          <p className="ft-sm text-gray pl-1">{videoState.desc.length} char</p>
        </div>
      </div>
    </div>
  )
}

export default VideoPreview
