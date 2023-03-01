import { Link } from "react-router-dom"
import { Connect, User } from "../../types/models"
import styles from './ConnectList.module.css'

interface ConnectCardProps {
  date?: string;
  company: string;
  position: string;
  followUp: string;
  interview: string;
  response: string;
  appStatus: Connect[];
  user: User | null
  handleDeleteApplication: (appId: number) => void
}

const ConnectCard = (props: ConnectCardProps): JSX.Element => {
  const { appStatus, user } = props

  return (
    <article className={styles.container}>
      <h3>Application Status</h3>
      <div className={styles.card}>
        {appStatus.map((app: Connect) =>
          <div key={app.id}>
            <p>{props.date}</p>
            <p>{app.company}</p>
            <p>{app.position}</p>
            <p>{app.followUp}</p>
            <p>{app.interview}</p>
            <p>{app.response}</p>
            {app.profileId === user?.profile.id &&
            <div>
              <Link to={`/connects/${app.id}`} state={{app}}>
                <button>Edit Application</button>
              </Link>
              <button onClick={() => props.handleDeleteApplication(app.id)}>
                Delete Applicaiton
              </button>
            </div>
            }
          </div>
        )}
      </div>
    </article>
  )
}

export default ConnectCard