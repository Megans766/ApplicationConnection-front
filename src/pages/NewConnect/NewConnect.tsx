import { useState } from 'react'
import { AppEntryFormData } from '../../types/forms';
import styles from './NewConnect.module.css'
import { Connect, User } from '../../types/models'
import ConnectList from '../ConnectList/ConnectList';

interface ConnectProps {
  user: User | null;
  appStatus: Connect[];
  handleAddApp: (AppEntry: AppEntry) => void
  handleDeleteApplication: (appId: number) => void
}

interface AppEntry {
  date?: '';
  company: string;
  position: string;
  followUp: string;
  interview: string;
  response: string;
}

const NewConnect = (props: ConnectProps): JSX.Element => {
  const { user, appStatus } = props

  const [formData, setFormData] = useState<AppEntry>({
    date: '',
    company: '',
    position: '',
    followUp: '',
    interview: '',
    response: ''
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault()
    props.handleAddApp(formData)
    setFormData({
      date: '',
      company: '',
      position: '',
      followUp: '',
      interview: '',
      response: ''
    })
  }

  return (
    <main className={styles.container}>
      <h1>Hello {user ? user.name : ''}</h1>
        <h3>Track Your Applications</h3>
          <form autoComplete='off' onSubmit={handleSubmit}>
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
              type='text'
              value={formData.company}
              onChange={handleChange}
            />
            <label>Position:</label>
            <input 
              name='position'
              type='test'
              value={formData.position}
              onChange={handleChange}
            />
            <label>Follow Up:</label>
            <input 
              name='followUp'
              type='text'
              value={formData.followUp}
              onChange={handleChange}
              placeholder='Yes or No'
            />
            <label>Interview:</label>
            <input 
              name='interview'
              type='text'
              value={formData.interview}
              onChange={handleChange}
              placeholder='Yes or No'
            />
            <label>Response:</label>
            <input 
              name='response'
              type='text'
              value={formData.response}
              onChange={handleChange}
              placeholder='Yes or No'
            />
            <button>Submit</button>
          </form>
          <ConnectList 
            user={user}
            appStatus={appStatus}
            handleDeleteApplication={props.handleDeleteApplication} 
            date={''} company={''} position={''} 
            followUp={''} interview={''} response={''}
          />
    </main>
  )
}

export default NewConnect