import React from 'react'
import './Button.css'
export const Button = ({ onClick, className, color, title, variant }) => (
	<button
		onClick={onClick}
		className={`button ${className} ${variant} ${color}`}>
		{title}
	</button>
)