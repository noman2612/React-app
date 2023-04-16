import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
    const {LogUser} = useContext(AuthContext)
    const handelLogin =(e)=>{
        event.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,)
        LogUser(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
         console.log(error)
          // ..
        });
    }
  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handelLogin}>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="" placeholder="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
        </div>
        <input type="submit" value="Login" className="submit-btn" />
      </form>
      <p><small>New to Ema-john? Create New Account<Link to='/SignUp' >Sign Up</Link></small></p>

    </div>
  );
};

export default Login;
