// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main>
      <h1>Application Connection</h1>
      <p>Application Connection was designed with the job seeker in mind. If your looking for a way to keep track of the applications you have submitted, search no more. Application Connection is here to help. Sign Up to get started.</p>
    </main>
  )
}

export default Landing
