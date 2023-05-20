import React from 'react';
import Logo from './images/logo2.png';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const auth=getAuth();

function Header() {
  const [{ basket ,user},dispatch] = useStateValue();
  console.log(basket);
  const handleAuthentication=()=>{
    
    if(user){
      auth.signOut();
    }
  }
  console.log(user);
  return (
    <nav className="header">
      <Link to="/">
        <img className='header__logo' src={Logo} alt='' />
      </Link><div className='header__search'>
        <input type="text" className='bar' />
        <SearchIcon className='icon' /></div>
      <div className="header_nav">
        <Link to={!user &&"/Login" }className="header__link">
          <div  onClick ={handleAuthentication} className='header_option'>
            <span className='header_optionlineone'>Account {user?.email}</span>
            <span className='header_optionlinetwo'>{user?'Sign Out': 'Sign In'}
            </span></div>
        </Link>

      </div>
      <div className="header_nav">
        <Link to='/' className="header__link">
          <div className='header_option'>
            <span className='header_optionlineone'>Returns</span>
            <span className='header_optionlinetwo'>&Orders</span></div>
        </Link>

      </div>
      <div className="header_nav">
        <Link to="/" className="header__link">
          <div className='header_option'>
            <span className='header_optionlineone'>Your </span>
            <span className='header_optionlinetwo'>prime</span></div>
        </Link> </div>
      <Link to="/Checkout" className='header__link'>
        <div className='header_basket'>
          <ShoppingBasket />
          <span className='header_optionlinetwo headerbasketcount'>{basket?.length}</span>

        </div>
      </Link>


    </nav>



  );
}

export default Header;

