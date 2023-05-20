import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import Loginimage from "./images/logo2.png"
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB96OLI_-43Jjt2iTnfhfvib9pg4Hp2Y7E",
  authDomain: "fir-22233.firebaseapp.com", 
  projectId: "fir-22233",
  storageBucket: "fir-22233.appspot.com",
  messagingSenderId: "319481473778",
  appId: "1:319481473778:web:980c3db6a6d0d8c0867e6b",
  measurementId: "G-NYDCTV7Q7F"
};
firebase.initializeApp(firebaseConfig);
const auth =getAuth();
const Login = () => {
  const navigate =useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword( auth,email,password)
    .then((auth)=>{

      alert("Account successfully logged in")
      
        navigate('/');
      
      
console.log(auth);
    })
    .catch(error=>alert(error?.message))
}
  
  const register = e => {
    e.preventDefault();
    
        createUserWithEmailAndPassword( auth,email,password)
        .then((auth)=>{
          if(auth){
            navigate ('/');}
          
          alert("Account successfully created")
console.log(auth);

        })
        .catch(error=>alert(error?.message))
  }
  return (
    <div className='Login'>
      <Link to='/'>
        <img className='login_image' src={Loginimage} alt='' />  </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
          <h5> E-mail</h5>
          <input type='text' value={email} onChange={
            e => setEmail(e.target.value)} />
          <h5> Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" onClick={signIn} className='login_signinbutton'>Sign In</button>
        </form><p>
          By signing-in you agree to Wild Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
        </p>
        <button onClick={register} className='login_registerbutton'>Create your Wild account</button>
      </div>
    </div>
  )
}

export default Login
