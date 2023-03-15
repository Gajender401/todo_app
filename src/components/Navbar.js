import React from 'react'
import "./Navbar.css"
import { useUserAuth } from "../context/AuthContext"

function Navbar({email}) {
  const {logout} = useUserAuth()

  return (
<header className='navbar'>
        <div className='navbar__title navbar__item'>Todo App</div>
        <div className='navbar__item'>
          <img src='https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png'
          alt='user'
          width="35px"
          style={{marginRight:"-20px"}} />  
        </div>
        <div className='navbar__item'>{email}</div>
        <div className='navbar__item'>
          <button className='logout_btn' onClick={logout} >
            Logout
          </button>
        </div>
    </header>
  )
}

export default Navbar