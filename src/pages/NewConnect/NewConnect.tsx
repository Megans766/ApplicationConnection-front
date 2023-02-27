//npm modules
import { useState } from 'react'

//types 
import { Connect, User } from '../../types/models'
import ConnectList from '../ConnectList/ConnectList';

interface ConnectProps {
  handleAddApp: (AppEntry: AppEntry) => void
  user: User | null;
  appStatus: Connect[];
  handleDeleteApplication: (appId: number) => void
  // fetchAllApps: () => void
}

interface AppEntry {
  date?: Date;
  company: string;
  position: string;
  followUp: string;
  interview: string;
  response: string;
}

const NewConnect = (props: ConnectProps): JSX.Element => {
  const { user, appStatus } = props

  const [formData, setFormData] = useState<AppEntry>({
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
    props.handleAddApp(formData)
    setFormData({
      date: new Date,
      company: '',
      position: '',
      followUp: '',
      interview: '',
      response: ''
    })
  }

  // function fetchAllApps(): void {
  //   throw new Error('Function not implemented.');
  // }

  function handleDeleteApplication(appId: number): void {
    throw new Error('Function not implemented.');
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
          {/* <input 
            name='date'
            type='date'
            value={formData.date}
            onChange={handleChange}
          /> */}
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
            type='string'
            value={formData.followUp}
            onChange={handleChange}
          />
          <label>Interview:</label>
          <input 
            name='interview'
            type='string'
            value={formData.interview}
            onChange={handleChange}
          />
          <label>Response:</label>
          <input 
            name='response'
            type='string'
            value={formData.response}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </section>
        <ConnectList 
          appStatus={appStatus}
          handleDeleteApplication={props.handleDeleteApplication}
          user={user}
          // fetchAllApps={fetchAllApps}
        />
      {/* )} */}
    </main>
  )
}

export default NewConnect