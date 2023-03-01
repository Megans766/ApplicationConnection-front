//npm packages
import { Link } from "react-router-dom"

//types
import { Connect, User } from "../../types/models"

//stylesheets
import styles from './ConnectList.module.css'

interface ConnectCardProps {
  date?: string;
  company: string;
  position: string;
  followUp: string;
  interview: string;
  response: string;
  appStatus: Connect[];
  user: User | null;
  handleDeleteApplication: (appId: number) => void
}

const ConnectCard = (props: ConnectCardProps): JSX.Element => {
  const { appStatus, user } = props

  return (
    <article className={styles.container}>
      <h3>Application Status</h3>
      <div className={styles.card}>
        {appStatus.map((app: Connect) =>
          <div key={app.id} className={styles.ListContainer}>
            {app.profileId === user?.profile.id &&
              <div>
                <p>Date: {props.date}</p>
                <p>Company: {app.company}</p>
                <p>Position: {app.position}</p>
                <p>Followed Up: {app.followUp}</p>
                <p>Interview: {app.interview}</p>
                <p>Employer Response: {app.response}</p>
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