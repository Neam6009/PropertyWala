import React from "react";
import classes from "../assets/Styles/navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/images/PW_logo.png";

const Navbar = () => {
  return (
    <div className={classes.NavAll}>
      <img src={Logo} alt="logo" />
      <Link to="/" className={classes.logoLink}>
        <p className={classes.name}>PropertyWala</p>
      </Link>
      <div className={classes.NavButtons}>
        <Link to="/login">
          <button className={classes.navLogin}>Login</button>
        </Link>
        <Link to="/register">
          <button className={classes.navSignup}>register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
