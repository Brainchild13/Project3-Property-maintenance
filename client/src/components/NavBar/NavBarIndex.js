import React from 'react';
import './style.css';

function NavBarIndex(props) {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <a href="/" className="click">
          Maintenance Manager
        </a>
        {/* <div className="title">Title</div>
        <div className="scores">Score:</div> */}
      </nav>
    </div>
  );
}

export default NavBarIndex;
