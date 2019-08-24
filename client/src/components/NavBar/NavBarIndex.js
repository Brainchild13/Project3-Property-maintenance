import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// function NavBarIndex(props) {
function NavBarIndex() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-md navbar-light "> */}
      <nav className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="/">
          <img className="navlogo" alt="logo" src="property-properly-logo-final.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon" /> */}
          <i class="fa fa-navicon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}
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
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* <nav className="navbar navbar-light ">
        <ul className="nav nav-tabs">
          <li>
            <a href="/" className="click">
              <img className="navlogo" src="property-properly-logo-final.png" />
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
      </nav> */}
    </div>
  );
}

export default NavBarIndex;
