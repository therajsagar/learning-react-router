import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Resume from './Resume.jsx';
import Project from './Projects.jsx';
import Bar from './Bar.jsx';

export default function() {
  return (
    <BrowserRouter>
      <>
        <Bar />
        <Switch>
          <Redirect exact path='/' to='/home' />
          <Route path='/home' component={Home} />
          <Route path='/resume' component={Resume} />
          <Redirect exact strict from='/projects/' to='/projects' />
          <Route path='/projects' component={Project} />
          <Route render={() => <h2>Error: Invalid URL</h2>} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
