import React, { useContext, useState, useEffect } from 'react'
import { auth, newsignup, newlogin, newlogout, newReset, newUpdateEmail, newUpdatePassword } from '../firebase/firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })    

        return unsubscribe
    }, [])
 
    const value = {
        currentUser,
        newlogin,
        newsignup,
        newlogout, 
        newReset, 
        newUpdateEmail,
        newUpdatePassword


    } 
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
