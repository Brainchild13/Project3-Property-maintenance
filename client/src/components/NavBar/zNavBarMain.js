import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function NavBarIndex(props) {
  return (
    <div>
      <nav className="navbar navbar-light ">
        {/* <a href="/" className="click">
          Clicky Game
        </a> */}
        <div className="title">Title</div>
        <div className="scores">Score:</div>
      </nav>
    </div>
  );
}

export default NavBarIndex;
