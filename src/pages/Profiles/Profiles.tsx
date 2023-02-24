// npm modules
import { useState } from 'react'
// import { AppEntryFormData } from '../../types/forms';

// types
import { Profile, Connect } from '../../types/models'

interface ProfilesProps {
  profile: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profile } = props

  // const [formData, setFormData] = useState<AppEntryFormData>({
  //   date: Date,
  //   company: '',
  //   position: '',
  //   followUp: Boolean,
  //   interview: Boolean,
  //   response: Boolean,
  //   profileId: Number
  // })

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
            value={connect.date}
          />
          <label>Compnay:</label>
          <input 
            name='company'
            type='string'
            value={profile.application.company}
          />
          <label>Position:</label>
          <input 
            name='position'
            type='string'
            value={profile.application.company}
          />
          <label>Follow Up</label>
          <input 
            name='followUp'
            type='boolean'
          />
        </form>
      </section>
    </main>
  )
}

export default Profiles