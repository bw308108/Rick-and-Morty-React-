import React from "react";
import SignUp from "./routes/Signup/SignUp";
import { AuthProvider } from "./utils/contexts/AuthContext";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import LoginForm from "./routes/LoginForm/LoginForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import APIRequest from "./components/APIRequest/APIRequest";
import Navi from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import './App.css'




function App() {
  return (

    <div>
    <BrowserRouter>
     <AuthProvider>
    <Routes>
        <Route path='/' element={<Navi/>}>
        <Route index element={<Home/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path='profile'element={<ProfilePage/>}/>
        <Route path='updateprofile' element={<UpdateProfile/>}/>
        <Route path="forgotpassword" element={<ForgotPassword/>}/>
        <Route path="player" element={<APIRequest/>}/>
        </Route>
     </Routes>
     </AuthProvider>
     </BrowserRouter>
     </div>

  )
}

export default App;


/* <Container className="d-flex align-items-center justify-content-center"
style={{ minHeight: '100vh' }}
> */
/* <div className="w-100" style={{ maxWidth: '400px' }}> */
// </div>
//     </Container>
// import { Container } from "react-bootstrap";