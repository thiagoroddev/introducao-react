import React from "react";
import logo from "../../assets/images/image1.jpg";
import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <nav id="navbar">
          <div className="nav-brand">
            <img id="logo" src={logo} alt="" />
            <h1>Space Flight</h1>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
