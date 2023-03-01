import { NavLink } from 'react-router-dom'
import { User } from '../../types/models'
import styles from './NavBar.module.css'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <main className={styles.container}>
      <nav>
        {user ?
          <ul>
            <li><NavLink to="/connects">Application Tracker</NavLink></li>
            {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
            <li><NavLink to="/change-password">Change Password</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          </ul>
        :
          <ul>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        }
      </nav>
    </main>
  )
}

export default NavBar
