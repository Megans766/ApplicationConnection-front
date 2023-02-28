//npm modules
import { useState } from 'react'
import { AppEntryFormData } from '../../types/forms';

//types 
import { Connect, User } from '../../types/models'

import ConnectList from '../ConnectList/ConnectList';

interface ConnectProps {
  user: User | null;
  appStatus: Connect[];
  handleAddApp: (AppEntry: AppEntryFormData) => void
  handleDeleteApplication: (appId: number) => void
  // handleUpdateApplication: (appId: number) => void
}

// interface AppEntry {
//   date?: string;
//   company: string;
//   position: string;
//   followUp?: string;
//   interview?: string;
//   response?: string;
// }

const NewConnect: React.FC<ConnectProps> = ({ user, appStatus, handleAddApp, handleDeleteApplication}) => {
  // const { user, appStatus } = props

  const [formData, setFormData] = useState<AppEntryFormData>({
    date: '',
    company: '',
    position: '',
    followUp: '',
    interview: '',
    response: ''
  })

  const [visible, setVisible] = useState(false)

  const handleToggle = () => {
    setVisible(!visible)
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = evt.target
    setFormData(state => ({
      ...state, [name]: value
    }))
  }

  // const handleEditApplication = async (evt: React.MouseEvent<HTMLButtonElement>) => {
  //   evt.preventDefault()
  //   setFormData(formData)
  // }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    handleAddApp(formData)
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
    <main>
      <h1>Hello {user ? user.name : ''}</h1>
      <section>
        <h3>Track Your Applications</h3>
        <button onClick={handleToggle}>
          Show
        </button>
        {!visible &&
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
        }
      </section>
      {appStatus.map((appStatus: Connect) => (
        <ConnectList
          user={user}
          key={appStatus.id}
          appStatus={appStatus}
          handleDeleteApplication={handleDeleteApplication}
          // handleUpdateApplication={props.handleUpdateApplication}
          // handleEditApplication={handleEditApplication}
        />
        ))}
    </main>
  )
}

export default NewConnect