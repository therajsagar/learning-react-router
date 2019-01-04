import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Project from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";
import Bar from './Bar.jsx';


const App = () => {
  return(
    <BrowserRouter>
     <div>
       <Bar />
         <Switch>
         <Redirect exact path='/' to='/home' />
         <Route path = '/home' component = {Home}/>
         <Route path = '/resume' component = {Resume}/>
         <Redirect exact strict from = '/project/' to = "/project" />
         <Route path = '/project' component = {Project}/>
         <Route path = '/contact' component = {Contact}/>
         <Route component={Error} />
         </Switch>
     </div>
    </BrowserRouter>
  )
}


export default App;
