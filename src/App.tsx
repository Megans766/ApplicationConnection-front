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

  const fetchAllApps = async () => {
    const appData = await connectService.index()
    setAppStatus(appData)
  }

  useEffect(() => {
    fetchAllApps()
  }, [])

  const handleAddApp = async (formData: AppEntryFormData): Promise<void> => {
    const newApp: Connect = await connectService.create(formData)
    setAppStatus([newApp, ...appStatus])
    navigate('/connects')
  }

  const handleUpdateApplciation = async (appId: number) => {
    const appData = {
      isComplete: true
    }
    const updatedApp = await connectService.update(appData, appId)
    const updatedAppList = appStatus.map((app: any) => {
      return app.id === updatedApp.appId
      ? updatedApp
      : app
      })
    setAppStatus(updatedAppList)
  }

  const handleDeleteApplication = async (appId: number): Promise<void> => {
    try {
      await connectService.deleteAppEntry(appId)
      const updatedAppList = appStatus.filter((app: any) => app.id === appId)
      setAppStatus(updatedAppList)
    } catch (error) {
      console.log(error)
    }
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