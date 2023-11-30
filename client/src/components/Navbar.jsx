import React from 'react';
import classes from '../assets/Styles/navbar.module.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className={classes.mobileNav}>
        <p className={classes.logoName}>
          <Link to="/">PropertyWala</Link>
        </p>
        <button>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={classes.navbar}>
        <div className="closeBtnContainer display-none">
          <button className={classes.closeButton}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <p className={classes.logoName}>
          <Link to="/">PropertyWala</Link>
        </p>
        <div className={classes.navItems}>
          <p>
            <Link to="/show-properties/rent">Rent</Link>
          </p>
          <p>
            <Link to="/show-properties/sale">Buy</Link>
          </p>
          <p>
            <Link to="/list-property">Sell</Link>
          </p>

          <div name="portfolioDropdown" id="" className={classes.navbarOptions}>
            <span>Portfolio </span>
            <i className="fa-solid fa-angle-down"></i>
            <div className={classes.portfolioDropdownOption}>
              <Link to="/my-properties">My properties</Link>
              <Link to="#">Property analysis</Link>
            </div>
          </div>

          <div name="resourcesDropdown" id="" className={classes.navbarOptions}>
            <span>Resources </span>
            <i className="fa-solid fa-angle-down"></i>
            <div className={classes.resourceDropdownOption}>
              <Link to="/blogs">Blog Post</Link>
              <Link to="/help">Help</Link>
            </div>
          </div>
          <Link to="/about-us">About Us</Link>
          <Link to="/pricing-plans">Premium</Link>
          {/* <% if(user && user.isCertified){ %>
            <Link to="/compose-blog">Compose</Link>
            <% } %>
            <% if(user && user.isAdmin){ %>
                <Link to="/admin-control">Admin Controls</Link>
            <% } %> */}
        </div>

        {/* <% if(user){ %>
          <div className="user-profile">
          <Link to="/profile" style="text-decoration: none">
          <p className="icon">
          <%= user.name[0] %>
          </p>
          </Link>
          <p>
          <%= user.name %>
          </p>
            <Link to="/auth/logout"><button className="navSignup">Logout</button></Link>
          </div>
          <% } else{ %>
            <div className="navButton">
            <Link to="/login"><button className="navLogin">Login</button></Link>
            <Link to="/register"><button className="navSignup">register</button></Link>
            </div>
        <% } %> */}
      </div>
    </>
  );
};

export default Navbar;
