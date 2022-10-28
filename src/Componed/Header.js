
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/UserContext';
import { FaLink, FaToggleOff, } from  'react-icons/fa'

const Header = () => {
    const {user} = useContext(AuthContext)

    return (
      
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="danger">
          <Container>
            <Navbar.Brand href="#home"><img style={{height:'60px'}} src="https://play-lh.googleusercontent.com/edmBVFMS9fhuZycs2I6jCO7vGxhH434upOADR2e3x5Wi_s6Et4vcFY0gYs0q_B0qFS8" alt="" /> Programing Hero</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <button className='fs-5 bold rounded me-3'><Link to='/faq'>FaQ</Link></button>
                 <button className='fs-5 bold rounded me-3'><Link to='/blog'>Blog</Link></button>
                <button className='fs-5 bold rounded me-3'><Link to='/program/id'>Courses</Link></button>
                
              </Nav>
              <Nav>
              
                <button className='btn btn-danger text-dark'><Link to='/signin' >Sign In <FaLink></FaLink> </Link></button>
                <button className='btn btn-danger text-dark'><Link to='/login' >Log In</Link></button>
            
                <Nav.Link eventKey={2} href="#memes">
                  DarkTheme <FaToggleOff className='fs-2'></FaToggleOff>
                </Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
         
       
      );
    
    
};

export default Header;