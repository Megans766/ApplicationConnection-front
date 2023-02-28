// services
import { AppEntryFormData } from '../types/forms'
import { Connect } from '../types/models'
import * as tokenService from './tokenService'

// types
// import { AppEntryFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/connects`

async function create(formData: any): Promise<any> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Connect[]
  } catch (error) {
    throw error
  }
}

async function index(): Promise<Connect[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        // 'Content-Type': 'application/json'
      }
    })
    return await res.json() as Connect[]
  } catch (error) {
    throw error
  }
}

async function update(formData: AppEntryFormData): Promise<Connect> {
  try {
    const res = await fetch(`${BASE_URL}/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json()
  } catch(error) {
    throw error
  }
}

async function deleteAppEntry(appId: number): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/${appId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    res.json()
  } catch(error) {
    throw error
  }
}

export { 
  create,
  index,
  update,
  deleteAppEntry
}