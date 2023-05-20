
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import Checkout from './Checkout';
import Login from './Login';
import Header from './Header';
import './App.css';
import './custom.css'
import { useEffect } from 'react';

import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
const auth=getAuth();
function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);
      if (authUser) {
dispatch({
  type:'SET_USER',
  user:authUser
})
      } else {
dispatch({
  type:'SET_USER',
  user:null
})
      }
 })
  }, [])


{
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/Checkout' element={< Checkout />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
          <Route exact path='/about-us' element={< AboutUs />}></Route>
          <Route exact path='/contact-us' element={< Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}  
}
export default App;

