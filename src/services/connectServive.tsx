// services
import * as tokenService from './tokenService'

// types
import { Profile } from "../types/models"
import { AppEntryFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/connects`

async function create(formData: AppEntryFormData): Promise<Profile> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

export { 
  create,
}