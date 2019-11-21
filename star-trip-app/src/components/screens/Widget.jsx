import React from 'react'
import Axios from 'axios'
import './Widget.css'

class Widget extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           asteroid: '' 
        }

        }
        componentDidMount(){
            this.fetchAsteroid()
        }
        fetchAsteroid = async() => {
            try{
                const ast = await Axios.get(`http://www.neowsapp.com/rest/v1/feed?start_date=2019-09-08&end_date=2019-09-09&detailed=false&api_key=xo39f2wLu4OcZ00bw6uKfrNgbTSmyjHrOwA9M8KN`)
                const near_objects = Object.keys(ast.data.near_earth_objects)[0]
                const astroidArray = ast.data.near_earth_objects[near_objects]
                const randomObject = astroidArray[Math.floor(Math.random()* astroidArray.length -1)].close_approach_data[0].miss_distance.miles
                this.setState((state =>({
                    asteroid: [...state.asteroid, randomObject]
                })))

                
                
    
            } catch(error){
                console.error(error)
            }
        }
        render(){
            return(
            <div className='asteroid'>
            <p>{`Asteroid is ${this.state.asteroid} miles away`}</p>
            </div>
            )
        }
}
export default Widget;