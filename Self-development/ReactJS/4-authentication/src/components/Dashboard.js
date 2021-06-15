import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/logga-in')
        } catch {
            setError('Ett problem uppstod vid utloggningen.')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Mejl-adress:</strong> {currentUser.email}
                    <Link to="/uppdatera-profil" className="btn btn-primary w-100 mt-3 btn-dark">Uppdatera profil</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Logga ut</Button>
            </div>
        </>
    )
}
