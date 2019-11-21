import React from 'react'
import { api } from '../services/ApiConfig'
import './AddCrew.css'
import { NavLink } from 'react-router-dom'
export default class AddCrew extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    onChange = (e) => {

        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = async(e) => {
        e.preventDefault()
        await api.post('/crew/crew', {
            image:this.state.image,
            name:this.state.name,
            species:this.state.species,
            greeting:this.state.greeting,
            rank:this.state.rank
        })
        .then(res =>(res.status === 201 ? this.props.history.push('/crew') : null))
    }
    render() {
        console.log(this.state)
        return (
            <div className='form'>
            <div className='form-title'>
            <h1>Add Member</h1>
            </div>  
            <div className='form-content'>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="image" 
                        placeholder='image url'
                        value={this.state.image}
                        onChange={(e) => this.onChange(e)} />
                    <input 
                        type="text"
                        name="name"
                        placeholder='name'
                        value={this.state.name}
                        onChange={(e) => this.onChange(e)} />
                    <input 
                        type="text" 
                        value={this.state.species} 
                        placeholder='species'
                        name="species" 
                        onChange={(e) => this.onChange(e)} /> 
                    <input 
                        type="text" 
                        value={this.state.greeting} 
                        name="greeting" 
                        placeholder='greeting'
                        onChange={(e) => this.onChange(e)} /> 
                    <input 
                        type="text" 
                        value={this.state.rank} 
                        placeholder='rank'
                        name="rank" 
                        onChange={(e) => this.onChange(e)} />
                    <button type="submit" value="Add" className='submit-button'>Add</button>
                </form>
                <NavLink exact to='/crew' activeClassName='active'>
					<div className='crew-button'>
						<h4>
							Crew
					</h4>
					</div>
				</NavLink>
                </div>
            </div>
        )
    }
}