import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
	return (
		<nav>
				<NavLink exact to='/' activeClassName='active'>
					<h3>Home</h3>
				</NavLink>
				<NavLink exact to='/crew/add/' activeClassName='active'>
					<h3>Add Crew</h3>
				</NavLink>
		</nav>
	)
}

export default Nav
