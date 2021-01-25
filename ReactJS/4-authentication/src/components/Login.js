import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            /* Redirect till dashboard'en vid inloggningen inuti () är för path'en */
            history.push("/")
        } catch {
            setError('Ett problem uppstod vid inloggningen.')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Logga in</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Mejl-adress</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Lösenord</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 btn-dark" type="submit">
                            Logga in
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/glömt-lösenordet">Glömt lösenordet?</Link>
                    </div>
                </Card.Body>    
            </Card>
            <div className="w-100 text-center mt-2">
                Har ingen konto? <Link to='/skapa-konto'>Skapa ett konto</Link>
            </div>
        </>
    )
}
