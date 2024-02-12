import { singleUser } from '..'
import Single from '../components/Single'

const UserDetails = () => {
  // fetch data and send to single component
  return (
    <div>
      <Single {...singleUser}/>
    </div>
  )
}

export default UserDetails