// types
import { Connect, Profile } from "../../types/models";

interface ApplicationListProps {
  profile: Profile[];
  appStatus: Connect[];
}

const ApplicationList = (props: ApplicationListProps): JSX.Element => {
  const { profile, appStatus } = props
  return (
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
  )
}

export default ApplicationList