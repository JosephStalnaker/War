import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Nav = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <h1>WAR</h1>
    <nav>
      {isLoggedIn ? (
        <div className="nav-controls">
          <div className="nav-links">
            <Link to="/home">Home</Link>
          </div>
          <div className="nav-links">
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        <div className="nav-controls">
          <div className="nav-links">
            <Link to="/login">Login</Link>
          </div>
          <div className="nav-links">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Nav);
