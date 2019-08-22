import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// function NavBarIndex(props) {
function NavBarIndex() {
  return (
    <div>
      <nav className="navbar navbar-light ">
        {/* <a href="/" className="click">
          Maintenance Manager
        </a> */}
        {/* <div className="title">Title</div>
        <div className="scores">Score:</div> */}
        <ul className="nav nav-tabs">
          <li>
            <a href="/" className="click">
              Maintenance Manager
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Registration"
              className={
                window.location.pathname === '/Registration'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Request"
              className={
                window.location.pathname === '/Request'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Request
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Issue"
              className={
                window.location.pathname === '/Issue'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Issue
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarIndex;
