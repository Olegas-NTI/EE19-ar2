import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'


/* PrivateRouten gör så att man kan inte använda länk till dashboard för att access'a dashboarden, den kolalar om user ör inloggad elller inte och sen bestämmer om den ska få tillgång till den eller inte */
export default function PrivateRoute({component: Component, ...rest}) {
    
    const {currentUser} = useAuth()
    return (
        <Route 
        {...rest}
        render={props => {
           return currentUser ? <Component {...props} / > : <Redirect to="logga-in" />
        }}
        >
            
        </Route>
    )
}
