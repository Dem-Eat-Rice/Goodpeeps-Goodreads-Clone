import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginFormPage/LoginForm';
import './Navigation.css';
import logo from "../../images/goodpeeps.png"
import magnifyingGlass from "../../my.png"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/shelves">My Movies</NavLink>
        <NavLink exact to="/">Browse</NavLink>
        <NavLink exact to="/">Community</NavLink>
        <div class="searchBar">
          <input className="search" type="text" placeholder="Search movies" />
        <NavLink to="/nowhere">
          <img id="glass" src={magnifyingGlass}/>
        </NavLink>
        </div>
        <div id="profile-button">
          <ProfileButton user={sessionUser} />
        </div>
      </>
      
    );
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
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
        {isLoaded && sessionLinks}
      </ul>
        <hr></hr>
    </>
  );
}

export default Navigation;