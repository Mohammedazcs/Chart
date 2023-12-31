import React from 'react'
import "./SignIn.scss"

const SignIn = () => {
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
export default SignIn;