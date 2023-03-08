import React from 'react'
import { Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../../utils/contexts/AuthContext';


const Navi = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={require('../../components/Image/rick-and-morty-31013.jpg')} alt='morty' width={40}/>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link a href="login"></Nav.Link>
          <Nav.Link a href='signup'>Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet/>
  </>

  )
}

export default Navi