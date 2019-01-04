import React from 'react';
import {Link, Route, Switch} from  "react-router-dom";

const Project = ({match})=> {
    return(
        <div>
            <h2>Projects:-</h2>
            <hr/>
            <ul>
                <li>
                    <Link to ={match.url+'/proj1'}><h3>React Project</h3></Link>
                </li>
                <li>
                    <Link to={match.url+'/proj2'}><h3>Python Project</h3></Link>
                </li>
                <li>
                    <Link to={match.url+'/proj3'}><h3>JavaScript Project</h3></Link>
                </li>
                <li>
                    <Link to={match.url+'/proj4'}><h3>React-router Project</h3></Link>
                </li>
            </ul>
            <hr/>
            <Switch>
            <Route exact path={match.url+'/proj1'} render={()=><h3>React Project</h3>} />
            <Route exact path={match.url+'/proj2'} render={()=><h3>Python Project</h3>} />
            <Route exact path={match.url+'/proj3'} render={()=><h3>JavaScript Project</h3>} />
            <Route exact path={match.url+'/proj4'} render={()=><h3>React-router Project</h3>} />
            <Route render={() => <div>Pick a project to view!</div>}/>
      </Switch>
        </div>
    )
}

export default Project;