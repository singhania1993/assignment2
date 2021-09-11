import { createContext, useContext, useState } from 'react'
import { actor1 } from '../../images'
const VideoContext = createContext()

export const VideoProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    title: 'Say Hi to my customers',
    desc: '',
    types: ['Email', 'Marketing', 'Greeting', 'Email', 'Marketing', 'Greeting'],
    actorImg: actor1,
    voice: 'Asian',
    alignment: 'Center',
    background: actor1,
  })

  return (
    <VideoContext.Provider value={{ videoState, setVideoState }}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideo = () => useContext(VideoContext)
