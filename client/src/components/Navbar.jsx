import React from "react";
import classes from "../assets/Styles/navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/images/PW_logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={classes.NavAll}>
      <Link to="/" className={classes.logoLink}>
        <img src={Logo} alt="logo" />
        <p className={classes.name}>PropertyWala</p>
      </Link>
      {user && (
        <div className={classes.userProfile}>
          <Link className={classes.icon} to="/profile">
            <p>{user.name[0]}</p>
          </Link>
          <p className={classes.navUserName}>{user.name}</p>
          <Link to="/auth/logout">
            <button className={classes.navSignup}>Logout</button>
          </Link>
        </div>
      )}

      {!user && (
        <div className={classes.NavButtons}>
          <Link to="/login">
            <button className={classes.navLogin}>Login</button>
          </Link>
          <Link to="/register">
            <button className={classes.navSignup}>register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
