import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Project
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <NavLink to="#" className="nav-link">
            Page
          </NavLink>
        </ul>
      </div>
    </nav>);
  }
}

