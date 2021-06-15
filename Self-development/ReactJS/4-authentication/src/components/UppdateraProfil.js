import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function UppdateraProfil() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, uppdateraLösenord, uppdateraMejl} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

        function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Lösenord matchar inte varandra')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(uppdateraMejl(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(uppdateraLösenord(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Ett problem uppstod vid försök att ändra på profilen. Logga ut, logga in och försök igen.')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Uppdatera profil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Mejl-adress</Form.Label>
                            <Form.Control type="email" ref={emailRef} required  defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Lösenord</Form.Label>
                            <Form.Control type="password" ref={passwordRef}  placeholder="Lämna tom om du vill inte ändra på något." />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Bekräfta lösenord</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Lämna tom om du vill inte ändra på något." />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 btn-dark" type="submit">
                            Uppdatera profil
                        </Button>
                    </Form>
                </Card.Body>    
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to='/'>Avbryta</Link>
            </div>
        </>
    )
}
