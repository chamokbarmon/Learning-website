import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../firebase/UserContext';
const Login = () => {
     const navigate = useNavigate()
     const location = useLocation()

     const from = location.state?.from?.pathname||'/'
   
  const {SignUp,GoogleProvider,GithubProvider} = useContext(AuthContext)
  
  const GoogleSign = new GoogleAuthProvider()
  const GithubSign = new GithubAuthProvider()
  const handelSubmit = event =>{
    event.preventDefault();
    const from =event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password,name);

    SignUp(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      from.reset();
      navigate(from,{replace:true})

    })
    .catch(error=>{
      console.error('error',error)
    })

   
  }
  const handelGoogle =()=>{
    GoogleProvider(GoogleSign)
     .then(result=>{
       const user = result.user;
       console.log(user)

     })
     .catch(error=>{
       console.error('error',error)
     })
  }

  const handelGithub =()=>{
   GithubProvider(GithubSign)
   .then(result=>{
    const user = result.user;
    console.log(user)
   })
   .catch(error=>{
     console.error(error)
   })
  }
 
    return (
        <Form  onSubmit={handelSubmit} className='w-50 bg-dark mt-5 p-4 rounded m-auto '>
            <h1 className='text-white'>Log In  </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name='email' placeholder="Enter email :" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            
            <Form.Control type="password" name='password' placeholder="Password :" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button className='w-100 mb-3' variant="primary" type="submit">
            Submit
          </Button>
          <button onClick={handelGoogle} className='btn btn-outline-primary w-100 mb-3'>Google</button>
          <button onClick={handelGithub} className='btn btn-outline-primary w-100'>Github</button>

        
        </Form>
      );
    }

export default Login;