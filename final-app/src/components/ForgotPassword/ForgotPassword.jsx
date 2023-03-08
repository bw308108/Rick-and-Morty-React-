import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from '../../utils/contexts/AuthContext'
import { Link } from 'react-router-dom'




const ForgotPassword = () => {
    const emailRef = useRef()
    const { newReset } = useAuth()
    const [error, setError ] = useState('')
    const [message, setMessage ] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        try {
        setMessage('')
        setError('')
        setLoading(true)
        await newReset(emailRef.current.value)
        setMessage('Password Reset email has been sent. Check inbox for further instructions') 
    } catch { 
        setError('Failed to Sign in')
    }

        setLoading(false)
    } 
    

  return (
    <>
        <Card className="d-flex align-items-center justify-content-center">
            <Card.Body>
                <h2 className='text-center mb-4'>Reset Password</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form  onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading}  className='w-100' type='submit'>Reset Password</Button>
                    <div className='w-100 text-center mt-3'>
                        <Link to={'/login'}>Login</Link>
                    </div>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
            Need an account? <Link to={'/signup'}>Sign Up</Link>
        </div>
        </Card>

    </>
  )
}

export default ForgotPassword