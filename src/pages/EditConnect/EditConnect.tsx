import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AppEntryFormData } from '../../types/forms'

interface EditConnectProps {
  handleUpdateApplication: (formData: AppEntryFormData) => void
}

const EditConnect = (props: EditConnectProps): JSX.Element => {

  const location = useLocation()
  const { connect } = location.state
  
  const [formData, setFormData] = useState<AppEntryFormData>(connect)
  
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
      <h1>Update This Appliaction</h1>
      <section>
      <form autoComplete='off' onSubmit={hanldeSubmit}>
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
            <label>Follow Up:</label>
            <input 
              name='followUp'
              type='string'
              value={formData.followUp}
              onChange={handleChange}
              placeholder='Yes or No'
            />
            <label>Interview:</label>
            <input 
              name='interview'
              type='string'
              value={formData.interview}
              onChange={handleChange}
              placeholder='Yes or No'
            />
            <label>Response:</label>
            <input 
              name='response'
              type='string'
              value={formData.response}
              onChange={handleChange}
              placeholder='Yes or No'
            />
          </form>
          <button type='submit'>Submit</button>
      </section>
    </main>
  )
}

export default EditConnect