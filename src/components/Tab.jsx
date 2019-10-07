import React from 'react';
import { NavLink } from 'react-router-dom';

export default function({ to, label }) {
  return (
    <NavLink
      style={{ margin: '25px', fontSize: '25x', fontWeight: 'bold' }}
      activeStyle={{ color: 'darkorange', fontWeight: 'bolder' }}
      to={to}
    >
      {label}
    </NavLink>
  );
}
