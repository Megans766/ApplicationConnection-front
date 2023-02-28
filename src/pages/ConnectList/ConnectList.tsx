import { useState } from "react"
import { Link } from "react-router-dom"

// types
import { Connect, User } from "../../types/models"

interface ConnectCardProps {
  user: User | null
  appStatus: Connect;
  handleDeleteApplication: (appId: number) => void
}

const ConnectCard: React.FC<ConnectCardProps> = ({ user, appStatus, handleDeleteApplication}) => {
  const [visible, setVisible] = useState(false)

  const handleToggle = () => {
    setVisible(!visible)
  }

  return (
    <article>
      <h3>Application Status</h3>
      <button onClick={handleToggle}>
        Show
      </button>
      {!visible &&
        <article>
          {/* {appStatus.map((app: any) => */}
            {/* <div key={app.id}> */}
              <p>{appStatus.date}</p>
              <p>{appStatus.company}</p>
              <p>{appStatus.position}</p>
              <p>{appStatus.followUp}</p>
              <p>{appStatus.interview}</p>
              <p>{appStatus.response}</p>

              {appStatus.profileId === user?.profile.id && 
              <div>
                <Link to={`/connects/${appStatus.id}`} >
                  <button>Edit Application</button>
                </Link>
                <button onClick={() => handleDeleteApplication(appStatus.id)}>
                  Delete Applicaiton 
                </button>
            </div>
              }
          {/* )} */}
        </article>
      }
    </article>
  )
}

export default ConnectCard