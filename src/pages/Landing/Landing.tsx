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
    <main className={styles.container}>
      <div>
        <h1>Application Connection</h1>
        <p>Application Connection was designed with the job seeker in mind.</p>
        <p>If you're looking for a way to keep track of the applications you have submitted, search no more.</p>
        <p>Application Connection is here to help.</p>
        <p><strong>Sign Up to get started.</strong></p>
      </div>
    </main>
  )
}

export default Landing
