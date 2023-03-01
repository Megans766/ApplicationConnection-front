// npm packages
import { useState } from 'react'

// stylesheets
import styles from './NewConnect.module.css'

// types
import { Connect, User } from '../../types/models'

//components
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
        <label>Date:
          <input 
            name='date'
            type='date'
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>Company:
          <input 
            name='company'
            type='text'
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <label>Position:
          <input 
            name='position'
            type='test'
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <label>Follow Up:
          <input 
            name='followUp'
            type='text'
            value={formData.followUp}
            onChange={handleChange}
            placeholder='Yes or No'
          />
        </label>
        <label>Interview:
          <input 
            name='interview'
            type='text'
            value={formData.interview}
            onChange={handleChange}
            placeholder='Yes or No'
          />
        </label>
        <label>Response:
          <input 
            name='response'
            type='text'
            value={formData.response}
            onChange={handleChange}
            placeholder='Yes or No'
          />
        </label>
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