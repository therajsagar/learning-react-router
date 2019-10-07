import React from 'react';
import Tab from './Tab.jsx';

export default function() {
  return (
    <>
      <hr />
      <Tab to='/home' label='HOME' />
      <Tab to='/resume' label='RESUME' />
      <Tab to='/projects' label='PROJECTS' />
      <hr />
    </>
  );
}
