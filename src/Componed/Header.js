
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
      
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="danger">
          <Container>
            <Navbar.Brand href="#home"><img style={{height:'60px'}} src="https://play-lh.googleusercontent.com/edmBVFMS9fhuZycs2I6jCO7vGxhH434upOADR2e3x5Wi_s6Et4vcFY0gYs0q_B0qFS8" alt="" /> Programing Hero</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features" className='fs-5 bold'>FAQ</Nav.Link>
                <Nav.Link href="#pricing" className='fs-5 bold'>Blog</Nav.Link>
                <Nav.Link href="#Courses" className='fs-5 bold'>Courses</Nav.Link>
                
              </Nav>
              <Nav>
               <button className='btn btn-danger text-dark'><Link to='/Signin' >Sign In</Link></button>
               <button className='btn btn-danger text-dark'><Link to='/login' >Log In</Link></button>
             
                <Nav.Link eventKey={2} href="#memes">
                  Darkside 
                </Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
         
       
      );
    
    
};

export default Header;