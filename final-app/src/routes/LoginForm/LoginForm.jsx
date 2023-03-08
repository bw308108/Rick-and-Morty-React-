import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from '../../utils/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css'




const LoginForm = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { newlogin } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        try {
        setError('')
        setLoading(true)
        await newlogin(emailRef.current.value, passwordRef.current.value )
        navigate('/profile')
    } catch { 
        setError('Failed to Sign in')
    }

        setLoading(false)
    } 
    

  return (
    <>  
    <div className='test'>
    <div className="w-100" style={{ maxWidth: '400px' }}> 
        <Card className='"d-flex align-items-center justify-content-center"'>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form  onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='email'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading}  className='w-100' type='submit'>Log In</Button>
                    <div className='w-100 text-center mt-3'>
                        <Link to={'/forgotpassword'}>Forgot Password?</Link>
                    </div>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
            Need an account? <Link to={'/signup'}>Sign Up</Link>
        </div>
        </Card>
        <h4 className='footer'>'Welcome to the club, pal' - Rick Sanchez </h4>
        </div>
</div>
    </>
  )
}

export default LoginForm