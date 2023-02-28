// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewConnect from './pages/NewConnect/NewConnect'
import EditConnect from './pages/EditConnect/editConnect'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as connectService from './services/connectService'

// stylesheets
import './App.css'

// types
import { Connect, User } from './types/models'
import { AppEntryFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [appStatus, setAppStatus] = useState<Connect[]>([])

  
  useEffect((): void => {
    const fetchAllApps = async (): Promise<void> => {
      try {
        const appData: Connect[] = await connectService.index()
        setAppStatus(appData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllApps()
  }, [])

  const handleAddApp = async (formData: AppEntryFormData): Promise<void> => {
    const newApp = await connectService.create(formData)
    setAppStatus([newApp, ...appStatus])
    navigate('/connects')
  }

  const handleUpdateApplciation = async (formData: AppEntryFormData) => {
    const updatedApp = await connectService.update(formData)
    setAppStatus(appStatus.map((app) => ((formData.id === app.id) ? updatedApp : app)))
    navigate('/connects')
  }

  const handleDeleteApplication = async (appId: number): Promise<void> => {
    // try {
      await connectService.deleteAppEntry(appId)
      appStatus.filter((app) => app.id !== appId)
      // setAppStatus(updatedAppList)
      navigate('/connects')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/connects"
          element={
            <ProtectedRoute user={user}>
              <NewConnect 
                user={user}
                appStatus={appStatus}
                handleAddApp={handleAddApp}
                handleDeleteApplication={handleDeleteApplication}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/connects/:id"
          element={
            <ProtectedRoute user={user}>
              <EditConnect 
                handleUpdateApplication={handleUpdateApplciation} 
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App