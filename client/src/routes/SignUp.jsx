import React from 'react';
import classes from '../assets/Styles/register.module.css';

const SignUp = () => {
  return (
    <div className={classes.loginParentContainer}>
      <div className={classes.loginChildContainer}>
        <h2 className={classes.welcomeMessage}>Create an account</h2>
        <form action="/auth/register" method="post">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required></input>
          <label for="name">Username</label>
          <input type="text" name="name" id="name" required></input>
          <label for="password">password</label>
          <input type="password" name="password" id="password" required></input>
          <button type="submit" id="register">
            Register
          </button>
          {/* <% if (msg) { %>
                <p className={classes.msg}> <%= msg %></p>
                <%}%> */}
          <a href="/login">
            <p className={classes.alreadyAccount}>Already have an account?</p>
          </a>
          <p>
            By registering you agree to Property Wala's
            <span>Terms of Service</span> and
            <span>Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
