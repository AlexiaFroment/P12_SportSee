import { NavLink } from "react-router-dom"
import Logo from "@/assets/images/logo.png"
export const TopNav = () => {
  return (
    <header className='topnav bg-dark p-1'>
      <nav className='d-flex align-items-center justify-content-between '>
        <img
          src={Logo}
          alt='logo'
          style={{ width: "175px", padding: "10px 15px" }}
        />
        <ul className='d-flex flex-grow-1 justify-content-around align-items-end p-0 m-0'>
          <li>
            <NavLink
              to='/'
              className='text-light'
              style={{ textDecoration: "none" }}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profil'
              className='text-light'
              style={{ textDecoration: "none" }}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/réglage'
              className='text-light'
              style={{ textDecoration: "none" }}>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/communauté'
              className='text-light'
              style={{ textDecoration: "none" }}>
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
