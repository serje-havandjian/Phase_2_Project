import react from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/HomePage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/MyProfile"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        My Profile
      </NavLink>
      <NavLink
        to="/Chatroom"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        ChatRoom
      </NavLink>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;
