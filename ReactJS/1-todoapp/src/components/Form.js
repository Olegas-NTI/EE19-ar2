import React, {useState, useContext} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    
    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Din anteckningen har skapats!', 'success')
            }).catch(() => {
                alert.show('Någonting är fel, anteckningen har inte skapats.', 'danger')
            })
            setValue('')
        } else {
            alert.show('Var vänlig och skriv din anteckning!')
        }
    }

    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                placeholder="Skriv din namn för anteckning"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}