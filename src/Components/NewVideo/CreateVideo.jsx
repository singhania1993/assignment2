import './video.css'
import { VideoHeader, VideoFeatures, VideoPreview, Sidebar } from '.'
import { useState } from 'react'
import EditVideoTitle from './EditVideo'

const CreateVideo = () => {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <>
      <div className={`create-video ${!isDisabled && 'bg-blur'}`}>
        <Sidebar />
        <div>
          <VideoHeader isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
          <div className="video-body">
            <VideoPreview />
            <VideoFeatures />
          </div>
        </div>
      </div>
      {!isDisabled && (
        <EditVideoTitle isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      )}
    </>
  )
}

export default CreateVideo
