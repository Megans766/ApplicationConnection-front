// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// types
import { Connect, Profile, User } from '../../types/models'

interface ProfilesProps {
  profile: Profile[];
  user: User | null;
  appStatus: Connect[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profile, user, appStatus } = props

  // if (!profiles) return <p>Please Log In  or Sign Up!</p>

  return (
    <main>
      <h1>Hello {user ? user.name : ''}</h1>
        <ProfileCard profile={profile} appStatus={appStatus}/>
    </main>
  )
}

export default Profiles