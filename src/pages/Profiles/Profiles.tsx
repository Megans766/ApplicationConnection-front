// npm modules
import { useState } from 'react'

// services
import * as connectService from '../../services/connectServive'

// types
import { Profile, Connect } from '../../types/models'
import { AppEntryFormData } from '../../types/forms'

interface ProfilesProps {
  profile: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profile } = props

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

  const handleAddApp = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await connectService.create(formData)
    } catch (error) {
      console.log(error)
    }
  }

  if (!profile) return <p>Please Log In  or Sign Up!</p>

  return (
    <main>
      <img src={profile.photo} alt='' />
      <h1>Welcome, {profile.name}</h1>
      <section>
        <h3>Track Your Applications</h3>
        <form>
          <label>Date:</label>
          <input 
            name='date'
            type='date'
            value={formData.date}
            onChange={handleChange}
          />
          <label>Compnay:</label>
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
        </form>
      </section>
    </main>
  )
}

export default Profiles