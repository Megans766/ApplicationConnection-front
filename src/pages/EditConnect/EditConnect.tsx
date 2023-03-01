import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AppEntryFormData } from '../../types/forms'
import styles from './EditConnect.module.css'

interface EditConnectProps {
  handleUpdateApplication: (formData: AppEntryFormData) => void
}

const EditConnect = (props: EditConnectProps): JSX.Element => {

  const location = useLocation()
  const { app }  = location.state
  
  const [formData, setFormData] = useState<AppEntryFormData>(app)
  
  const navigate = useNavigate()
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const hanldeSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault()
    props.handleUpdateApplication(formData)
  }

  return (
    <main>
      <section className={styles.container}>
        <h1>Update This Appliaction</h1>
        <form autoComplete='off' onSubmit={hanldeSubmit}>
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
                type='string'
                value={formData.company}
                onChange={handleChange}
              />
            </label>
            <label>Position:
              <input 
                name='position'
                type='string'
                value={formData.position}
                onChange={handleChange}
              />
            </label>
            <label>Follow Up:
              <input 
                name='followUp'
                type='string'
                value={formData.followUp}
                onChange={handleChange}
                placeholder='Yes or No'
              />
            </label>
            <label>Interview:
              <input 
                name='interview'
                type='string'
                value={formData.interview}
                onChange={handleChange}
                placeholder='Yes or No'
              />
            </label>
            <label>Response:
              <input 
                name='response'
                type='string'
                value={formData.response}
                onChange={handleChange}
                placeholder='Yes or No'
              />
            </label>
            <button>Submit</button>
          </form>
      </section>
    </main>
  )
}

export default EditConnect