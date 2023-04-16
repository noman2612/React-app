import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Heder.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Heder = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="heder">
      <img src={logo} alt="" />
      <div>
        <Link to="/"> Shop </Link>
        <Link to="/Order-Review">Order Review </Link>
        <Link to="/Manage-Inventory"> Manage Inventory</Link>
        <Link to="/Login">Login</Link>
        <Link to="/SignUp">signUp</Link>
        <p>
          {user && (
            <>
              <small>{user.email}</small>
              <button onClick={handleLogout}>logOut</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Heder;
