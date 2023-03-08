import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyA2hxNXBi66kFOtXJTtJAzLAK5KiQceXsY",
  authDomain: "final-app-b46df.firebaseapp.com",
  projectId: "final-app-b46df",
  storageBucket: "final-app-b46df.appspot.com",
  messagingSenderId: "326729189606",
  appId: "1:326729189606:web:762f4ff11bf2ce266f9327"
};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app

export const newsignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}


export const newlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const newlogout = () => {
    return signOut(auth)
}

export const newReset = (email) => {
    return sendPasswordResetEmail(auth, email)
}

export const newUpdateEmail = (email) => {
    return updateEmail(auth.currentUser, email)
}

export const newUpdatePassword = (password) => {
    return updatePassword(auth.currentUser, password)
}