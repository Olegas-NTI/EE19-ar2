import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        /*Kollar om båda inputs har samma värde alltså om client skrev sin lösenord två gånger rätt*/
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Lösenord matchar inte varandra')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            /* Redirect till dashboard'en vid registreringen, man kan ta bort om man vill att användaren loggar in först */
            history.push("/")
        } catch {
            setError('Kontot skapades inte. Vänligen försök igen.')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Skapa ett konto</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Bekräfta lösenord</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 btn-dark" type="submit">
                            Skapa konto
                        </Button>
                    </Form>
                </Card.Body>    
            </Card>
            <div className="w-100 text-center mt-2">
                Redan har ett konto? <Link to='/logga-in'>Logga in</Link>
            </div>
        </>
    )
}
