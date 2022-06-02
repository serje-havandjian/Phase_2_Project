import react from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "80px",
  padding: "12px",
  margin: "10px 6px 6px",
  textDecoration: "none",
  color: "black",
  
};

function NavBar() {
  return (
    <div className="navbar" >
      <NavLink
        className="navbarItem"
        to="/HomePage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#5d95cc",
        }}
      >
        Home
      </NavLink>
      <NavLink
        className="navbarItem"
        to="/About"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#5d95cc",
        }}
      >
        About
      </NavLink>
      <NavLink
        className="navbarItem"
        to="/MyProfile"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#5d95cc",
        }}
      >
        My Profile
      </NavLink>
      <NavLink
        className="navbarItem"
        to="/Chatroom"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#5d95cc",
        }}
      >
        ChatRoom
      </NavLink>
      <NavLink
        className="navbarItem"
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#5d95cc",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;
