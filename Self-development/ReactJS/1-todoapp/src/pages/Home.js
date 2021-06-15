import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    
    useEffect( () => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form />

            <hr/>
            <ul className="list-group"><li className="list-group-item note"><div><strong>Anteckningar är anslutna till Firebase database'n så att dom inte försvinner :)</strong><small>2020-12-28T02:13:34.856Z</small></div><button type="button" className="btn btn-outline-danger" disabled>×</button></li></ul>

            {loading 
              ? <Loader />
              : <Notes notes={notes} onRemove={removeNote}/>
            }
        </Fragment>
    )
}