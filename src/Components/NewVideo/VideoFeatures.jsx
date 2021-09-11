import { useState } from 'react'
import { Actors, Alignment, Background } from '.'
import Voice from './Voice'

const VideoFeatures = () => {
  const [route, setRoute] = useState('Actor')
  return (
    <div>
      <div className="video-features">
        <p
          className={`feature ${route === 'Actor' && 'blue-color'}`}
          onClick={() => setRoute('Actor')}
        >
          Actor
        </p>
        <p
          className={`feature ${route === 'Voice' && 'blue-color'}`}
          onClick={() => setRoute('Voice')}
        >
          Voice
        </p>
        <p
          className={`feature ${route === 'Alignment' && 'blue-color'}`}
          onClick={() => setRoute('Alignment')}
        >
          Alignment
        </p>
        <p
          className={`feature ${route === 'Background' && 'blue-color'}`}
          onClick={() => setRoute('Background')}
        >
          Background
        </p>
      </div>
      {route === 'Actor' && <Actors />}
      {route === 'Voice' && <Voice />}
      {route === 'Alignment' && <Alignment />}
      {route === 'Background' && <Background />}
    </div>
  )
}

export default VideoFeatures
