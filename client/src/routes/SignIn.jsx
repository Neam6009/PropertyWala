import React from 'react';
import classes from '../assets/Styles/login.module.css';

const SignIn = () => {
  return (
    <div className={classes.loginParentContainer}>
      <div>
        <div className={classes.loginChildContainer}>
          <div className={classes.icon}></div>
          <div className={classes.welcomeMessage}>
            <h2>Welcome back!</h2>
            <p>We're so excited to see you again!</p>
          </div>
          <form action="/auth/login" method="post">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required></input>
            <label for="password">password</label>
            <input type="password" name="password" id="password" required></input>
            <p className={classes.forgotPass}>Forgot your password?</p>
            <button type="submit" id="login">
              Log In
            </button>
            {/* <% if (msg) { %>
                        <p className={classes.msg}> <%= msg %></p>
                        <%}%> */}
            <a href="/register">
              <p>
                Need an account? <span>Register</span>
              </p>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
