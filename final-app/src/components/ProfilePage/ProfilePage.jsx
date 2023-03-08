import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../utils/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { newlogout } from '../../utils/firebase/firebase'
import APIRequest from '../APIRequest/APIRequest'

const ProfilePage = () => {
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        setError('')

        try {
          await newlogout()
          navigate('/login')
        } catch {
          setError('Failed to log out')
        } 
    }
  return (
    <>  
        {error && <Alert variant='danger'>{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <br/>
        <Link to={'/updateprofile'} className=''>Update Profile</Link>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
        <APIRequest/>

     

    </>
  )
}

export default ProfilePage