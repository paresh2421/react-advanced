import { useState, createContext } from 'react'
import NavLinks from './NavLinks'
import { useContext } from 'react'
// import { NavbarContext } from './Navbar'

export const NavbarContext = createContext()
// console.log(NavbarContext)

//custom hook
export const useAppContext = ()=> useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Matthew' })

  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar
