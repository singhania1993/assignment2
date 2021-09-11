import { BsUpload } from 'react-icons/bs'
import { background } from '../data'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Background = () => {
  return (
    <>
      <div className="background-list">
        <div className="fx-col">
          <div key="upload-key" className="background-details bg-white">
            <BsUpload className="btn-upload" />
          </div>
          <p className="background-txt">Upload</p>
        </div>
        {background.map((background) => (
          <div key={background.id} className="background-details fx-col">
            <img
              src={background.backgroundImg}
              alt={background.name}
              className="background-img"
            />
            <p className="background-txt">{background.name}</p>
          </div>
        ))}
      </div>
      <div className="background-options">
        <p>Solid Colours</p>
        <RiArrowDropDownLine className="arrow-dropdown-icon" />
      </div>
      <div className="background-options">
        <p>Videos</p> <RiArrowDropDownLine className="arrow-dropdown-icon" />
      </div>
    </>
  )
}

export default Background
