import { planDetails } from '.'
import { ImCross } from 'react-icons/im'
import { TiTick } from 'react-icons/ti'
const MyPlan = () => {
  return (
    <div className="plan-details">
      {planDetails.map(({ name, price, details, button }) => (
        <div className={`plan-detail ${name === 'Team' && 'current-plan'}`}>
          <p className="plan-name">{name}</p>
          <div className="plan-descriptions">
            {details.map(({ icon, detail }) => (
              <div className="plan-desc">
                {icon === 'tick' ? (
                  <TiTick />
                ) : (
                  <ImCross className="cross-icon" />
                )}
                <p className="detail">{detail}</p>
              </div>
            ))}
          </div>
          <p className="price">
            $<span className="font-lg">{price}</span>
          </p>
          <button className={`btn-plan ${name === 'Team' && 'btn-plan-green'}`}>
            {button}
          </button>
        </div>
      ))}
    </div>
  )
}

export default MyPlan
