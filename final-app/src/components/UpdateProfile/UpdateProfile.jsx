import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from '../../utils/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './UpdateProfile.css'



const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, newUpdateEmail, newUpdatePassword } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
   event.preventDefault()

   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
   return setError('Passwords do not match')
   }

   const promises = []
   setMessage('')
   setLoading(true)
   setError('')

    if (emailRef.current.value !== currentUser.email ){
        promises.push(newUpdateEmail(emailRef.current.value))
        setMessage('Email has been successfully changed') 
    }
    if (passwordRef.current.value) {
        promises.push(newUpdatePassword(passwordRef.current.value))
        setMessage('Password has been successfully changed') 
    }

    Promise.all(promises).then(() => {
        navigate('/profile')
    }).catch(() => {
        setError('Failed to Update Account')
    }).finally(() => {
        setLoading(false)
    })

    } 
    

  return (
    <>
        <div className='test'>
        <div className="w-100" style={{ maxWidth: '400px' }}> 
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Update Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form  onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id='email'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} placeholder='Leave blank to keep same password'/>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep same password'/>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading}  className='w-100' type='submit'>Update</Button>
                </Form>
                <div className='w-100 text-center mt-2'>
            Already have an account? <Link to={'/profile'}>Cancel</Link>
        </div>
            </Card.Body>
        </Card>
        <h4 className='footer'>'Welcome to the club, pal' - Rick Sanchez </h4>
        </div>
        </div>
    </>
  )
}

export default UpdateProfile