import React from 'react'
import {
  NavLink
} from 'react-router-dom'

export default function Navbar (): JSX.Element {
  const activeClassName: string = 'activeNav'
  const inactiveClassName: string = 'nav'

  return (
    <div id="main-nav">
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
          >
            tmuheez
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
