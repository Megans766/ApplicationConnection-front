//npm modules
import { useState, useEffect } from 'react'

//services
import * as connectService from '../../services/connectService'

//types 
import { Connect, User } from '../../types/models'
import { AppEntryFormData } from '../../types/forms'

//components
import ConnectCard from '../../components/ConnectCard/ConnectCard'

interface ConnectProps {
  user: User | null;
  appStatus: Connect[];
}

const Connects = (props: ConnectProps): JSX.Element => {
  const { user, appStatus } = props

  // const [appList, setAppList] = useState<Connect[]>([])
  const [formData, setFormData] = useState<AppEntryFormData>({
    date: new Date,
    company: '',
    position: '',
    followUp: '',
    interview: '',
    response: ''
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await connectService.create(formData)
    } catch (error) {
      console.log(error)
    }
  }

  // if (!appStatus.length) 
  // return <p>No Applications To Track Yet</p>

  return (
    <main>
      <h1>Hello {user ? user.name : ''}</h1>
      <section>
        <h3>Track Your Applications</h3>
        <form onSubmit={handleSubmit}>
          <label>Date:</label>
          <input 
            name='date'
            type='date'
            value={formData.date}
            onChange={handleChange}
          />
          <label>Company:</label>
          <input 
            name='company'
            type='string'
            value={formData.company}
            onChange={handleChange}
          />
          <label>Position:</label>
          <input 
            name='position'
            type='string'
            value={formData.position}
            onChange={handleChange}
          />
          <label>Follow Up</label>
          <input 
            name='followUp'
            type='boolean'
            value={formData.followUp}
            onChange={handleChange}
          />
          <label>Interview:</label>
          <input 
            name='interview'
            type='boolean'
            value={formData.interview}
            onChange={handleChange}
          />
          <label>Response:</label>
          <input 
            name='response'
            type='boolean'
            value={formData.response}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
        {/* <ApplicationList profile={profile} appStatus={appStatus} /> */}
      </section>
      {appStatus.map((appStatus: Connect) => 
        <ConnectCard 
          key={appStatus.profileId}
          appStatus={appStatus}
        />
      )}
    </main>
  )
}

export default Connects