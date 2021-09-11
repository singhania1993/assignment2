import { useVideo } from '.'

const VideoDesc = () => {
  const { videoState, setVideoState } = useVideo()
  return (
    <div className="video-desc">
      <textarea
        className="video-desc-input"
        type="text"
        placeholder="Video Description"
        value={videoState.desc}
        onChange={(e) =>
          setVideoState((state) => ({ ...state, state, desc: e.target.value }))
        }
      ></textarea>
    </div>
  )
}

export default VideoDesc
