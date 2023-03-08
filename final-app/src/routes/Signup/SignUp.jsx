import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from '../../utils/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'




const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { newsignup } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
    
        try {
        setError('')
        setLoading(true)
        await newsignup(emailRef.current.value, passwordRef.current.value )
        navigate('/profile')
    } catch { 
        setError('Failed to create an account')
    }

        setLoading(false)
    } 
    

  return (
    <>
    <div className='test'>
    <div className="w-100" style={{ maxWidth: '400px' }}> 
        <Card className=''>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
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
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading}  className='w-100' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
            Already have an account? <Link to={'/login'}>Log In</Link>
        </div>
        </Card>
        <h4 className='footer'>'Welcome to the club, pal' - Rick Sanchez </h4>
        </div>
</div>
    </>
  )
}

export default SignUp





/* <Container className="d-flex align-items-center justify-content-center"
style={{ minHeight: '100vh' }}
> */
/* <div className="w-100" style={{ maxWidth: '400px' }}> */
// </div>
//     </Container>
// import { Container } from "react-bootstrap";