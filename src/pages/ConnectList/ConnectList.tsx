// types
import { Connect, User } from "../../types/models"

//services
import * as connectService from '../../services/connectService'

interface ConnectCardProps {
  appStatus: Connect[];
  user: User | null;
  handleDeleteApplication: (appId: number) => void
  // fetchAllApps: () => void
}

const ConnectCard = (props: ConnectCardProps): JSX.Element => {
  const { appStatus, user } = props

  // if (!appStatus.length) 
  // return <p>No Applications To Track Yet</p>

  return (
    <article>
      <h3>Application Status</h3>
      <div>
        {appStatus.map((app: any) =>
          <div key={app.id}>
            <p>{app.date}</p>
            <p>{app.company}</p>
            <p>{app.position}</p>
            <p>{app.followUp}</p>
            <p>{app.interview}</p>
            <p>{app.response}</p>
            {/* {appStatus.appId === props.user.id && */}
            <button>Update</button>
              <button 
                onClick={() => props.handleDeleteApplication(app.id)}>Delete</button>
            {/*  } */}
          </div>
        )}
      </div>
    </article>
  )
}

export default ConnectCard