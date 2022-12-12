import React from 'react';

import { NavLink } from 'react-router-dom';

import { CasperIcon } from '../Svg';
import ThemeSwither from '../ThemeSwither';

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1 items-center">
        <CasperIcon fill="red" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blocks">Blocks</NavLink>
          </li>
          <li>
            <NavLink to="/peers">Peers</NavLink>
          </li>
        </ul>
      </div>
      <ThemeSwither />
    </header>
  );
}
