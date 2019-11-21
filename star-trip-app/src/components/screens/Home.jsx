import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
	return (
		<>
			<div className='home'>
				<div className='title'>
					<h1>Trip to the stars</h1>
				</div>
				<NavLink exact to='/crew' activeClassName='active'>
					<div className='crew-button'>
						<h4>
							My Crew
					</h4>
					</div>
				</NavLink>
				<div className='content'>
					<h2>An asteroid is heading towards earth. You are tasked with assembling a crew. You have to  get off this god foresaken rock as fast as possible. Who will you pick? Each person has distinct skills. Can they help you make this trip to the stars successful.</h2>
				</div>
			</div>

		</>
	)
}
export default Home
