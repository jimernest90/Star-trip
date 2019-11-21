import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Crew from '../screens/Crew'
import AddCrew from '../screens/AddCrew'
import Home from '../screens/Home'

export const Routes = (props) => {
    return(
        <Switch>
            <Route exact path ='/' component={Home} />  
            <Route exact path='/crew' component={Crew}/>
            <Route exact path='/crew/add' component={AddCrew}/>
        </Switch>
    )
}