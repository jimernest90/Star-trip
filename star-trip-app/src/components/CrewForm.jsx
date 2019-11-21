import React from 'react'

CrewForm = (props) => {
	return(
		<form className='form' onSubmit ={props.onSubmit}>
			<input name='image' value={props.image} placeholder='image' onChange={props.onChange}/>
			<input name='name' value={props.name} placeholder='name' onChange={props.onChange}/>
			<input name='species' value={props.species} placeholder='species' onChange={props.onChange}/>
			<input name='greeting' value={props.greeting} placeholder='greeting' onChange={props.onChange}/>
			<input name='rank' value={props.rank} placeholder='rank' onChange={props.onChange}/>
		</form>
	)
}
export default CrewForm;