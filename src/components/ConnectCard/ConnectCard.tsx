// types
import { Connect } from "../../types/models";

interface ConnectCardProps {
  appStatus: Connect;
}

const ConnectCard = (props: ConnectCardProps): JSX.Element => {
  const { appStatus } = props

  return (
    <article>
      <h3>Application Status</h3>
      <div>
        {appStatus.map((app) =>
          <div>
            <p>{app.date}</p>
            <p>{app.company}</p>
            <p>{app.position}</p>
            <p>{app.followUp}</p>
            <p>{app.interview}</p>
            <p>{app.response}</p>
          </div>
        )}
      </div>
    </article>
  )
}

export default ConnectCard