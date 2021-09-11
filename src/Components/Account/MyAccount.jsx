import { useState } from 'react'
import { Sidebar } from '../NewVideo'
import Billing from './Billing'
import MyPlan from './MyPlan'
import Profile from './Profile'
import './account.css'
import AccountHeader from './AccountHeader'
const MyAccount = () => {
  const [route, setRoute] = useState('Profile')
  console.log({ route })
  return (
    <div className="my-account">
      <Sidebar />
      <div className="account-info">
        <AccountHeader />
        <div className="account-options">
          <p
            onClick={() => setRoute('Profile')}
            className={`account-option ${route === 'Profile' && 'active-link'}`}
          >
            Profile
          </p>
          <p
            onClick={() => setRoute('Plan')}
            className={`account-option ${route === 'Plan' && 'active-link'}`}
          >
            My Plan
          </p>
          <p
            onClick={() => setRoute('Billing')}
            className={`account-option ${route === 'Billing' && 'active-link'}`}
          >
            Billing
          </p>
        </div>
        {route === 'Profile' && <Profile />}
        {route === 'Plan' && <MyPlan />}
        {route === 'Billing' && <Billing />}
      </div>
    </div>
  )
}

export default MyAccount
