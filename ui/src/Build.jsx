import React from 'react';
import { NavLink } from 'react-router-dom';

import Contents from './contents.jsx';

const NavBar = () => (
  <nav className="nav-bar">
    <NavLink exact to="/">Home</NavLink>
  </nav>
);

/* Home component which shows the static Navbar and the Contents */
const Build = () => (
  <div>
    <NavBar />
    <Contents />
  </div>
);

export default Build;
