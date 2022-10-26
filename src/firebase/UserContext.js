import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../Users/UserContext.Config';

const auth = getAuth(app)
export const AuthContext = createContext()



const UserContext = ({children}) => {
    const [user ,Setuser] =useState(null);
  const SignUp = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
 
  const GoogleProvider = (provider)=>{
     return signInWithPopup(auth,provider)
  }
  const GithubProvider = (provider)=>{
    return signInWithPopup(auth,provider)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentuser)=>{
        console.log('user changed',currentuser)
        Setuser(currentuser);
    });
    return () =>{
      unSubscribe()
    }
  },[])
  const AuthInfo = {user :user, SignUp,GoogleProvider,GithubProvider}
  return (
    <AuthContext.Provider value={AuthInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default UserContext;