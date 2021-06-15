import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'

export default function GlömtLösenordet() {
    const emailRef = useRef()
    const {återställaLösenord} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await återställaLösenord(emailRef.current.value)
            setMessage('Kolla din mejl-adressens inkorg för att återställa din lösenord')
        } catch {
            setError('Ett problem uppstod vid återställningen av din lösenord.')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Glömt lösenordet?</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Mejl-adress</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 btn-dark" type="submit">
                            Återställa lösenordet
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/logga-in">Gå tillbaka</Link>
                    </div>
                </Card.Body>    
            </Card>
            <div className="w-100 text-center mt-2">
                Har ingen konto? <Link to='/skapa-konto'>Skapa ett konto</Link>
            </div>
        </>
    )
}
