// types
import { Connect } from "../../types/models"

interface ConnectCardProps {
  appStatus: Connect[];
  handleDeleteApplication: (appId: number) => void
  handleUpdateApplication: (appId: number) => void
}

const ConnectCard = (props: ConnectCardProps): JSX.Element => {
  const { appStatus } = props

  // if (!appStatus.length) 
  // <p>No Applications To Track Yet</p>

  return (
    <article>
      <h3>Application Status</h3>
      <div>
        {appStatus.map((app: any) =>
          <div key={app.id}>
            <p>{app.date}</p>
            <p>{app.company}</p>
            <p>{app.position}</p>

            <p>You {app.followUp.isComplete ? 'Have Followed Up' : 'Have Not Followed Up'}</p>
            {!app.followUp.isComplete &&
              <button onClick={() => props.handleUpdateApplication(app.id)}>
                Complete Follow Up
              </button>
            }

            <p>
              {app.interview.isComplete ? 'Got An Interview' : 'Waiting To Receive Interview'}
            </p>
            <button onClick={() => props.handleUpdateApplication(app.id)}>
              Complete Interview
            </button>

            <p>
              You {app.response ? 'Received Employer FeedBack' : 'Did Not Receive Employer Feedback'}
            </p>
            <button onClick={() => props.handleUpdateApplication(app.id)}>
              Received Feedback
            </button>

            {/* {appStatus.appId === props.user.id && */}
              <button onClick={() => props.handleDeleteApplication(app.id)}>
                Delete Applicaiton 
              </button>
            {/*  } */}
          </div>
        )}
      </div>
    </article>
  )
}

export default ConnectCard