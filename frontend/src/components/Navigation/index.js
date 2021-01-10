import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginFormPage/LoginForm';
import './Navigation.css';
import logo from "../../goodpeeps.png"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
      
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">Sign Up</NavLink>
        <LoginForm />
      </>
    );
  }
  
  return (
    <>
      <ul>
        <NavLink exact to="/">
          <img src={logo}/>
        </NavLink>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </ul>
    </>
  );
}

export default Navigation;