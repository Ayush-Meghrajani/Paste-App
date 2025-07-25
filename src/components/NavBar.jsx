import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center '>

    <div
    className='flex flex-row gap-[4rem] ml-10 m-auto'
    >
    <button>
    <NavLink 
    to={"/"}
    >
      Home
    </NavLink>
    </button>

    <button>
      <NavLink
      to={"/pastes"}
      >
        Pastes
      </NavLink>
    </button>
    </div>

    </div>
  )
}

export default NavBar