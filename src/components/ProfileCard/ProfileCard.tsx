// npm modules
import { useState } from 'react'

// services
import * as connectService from '../../services/connectServive'

// components
import ApplicationList from '../../components/ApplicationList/Application List'

// types
import { Connect, Profile } from '../../types/models'
import { AppEntryFormData } from '../../types/forms'

interface ProfileCardProps {
  profile: Profile[];
  appStatus: Connect[];
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile, appStatus } = props

  const [formData, setFormData] = useState<AppEntryFormData>({
    date: new Date,
    company: '',
    position: '',
    followUp: false,
    interview: false,
    response: false
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

  return (
    <article>
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
      <h3>Application Status</h3>
      <ApplicationList profile={profile} appStatus={appStatus} />
    </section>
    </article>
  )
}

export default ProfileCard