import React, { useContext, useState } from 'react';
import'./singup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const SignUp = () => {
  const {signUser} = useContext(AuthContext)
    const [error,setError] = useState('')
    const handleSignUp =(e)=>{
      setError('')
            event.preventDefault()
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            const confirm = form.confirm.value
            console.log(email,password,confirm)
            signUser(email,password)
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
            
            if(password !==confirm){
                setError('the password are not match')
                require
            }
            else if(password.length<6){
                setError('the password are week give 6 digits password at list')
                return
            }
    }
    return (
        <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <div className="form-control">
          <label htmlFor="confirm password">conform password</label>
          <input
            type="password"
            name="confirm"
            id=""
            placeholder=" confirm password"
            required
          />
        </div>
        <input type="submit" value="Sign-Up" className="submit-btn" />
      </form>
      <p><small>Already have an account?<Link to='/login' >Login</Link></small></p>
      <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;