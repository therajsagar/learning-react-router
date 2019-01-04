import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from "react-router-dom";



const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Users = (props) => {
  return (
    <div>
      <h1>UserId: {props.match.params.id}</h1>
    </div>
)}

const Info = ({ match }) => {
  return (
    <div>
       <ul>
        <li>
          <Link to={match.url + "/phone"}><h2>Phone</h2></Link>
        </li>
        <li>
          <Link to={match.url + "/email"}><h2>Email</h2></Link>
        </li>
        <li>
          <Link to={match.url + "/address"}><h2>Address</h2></Link>
        </li>
      </ul>
      <Route
        exact path={match.url + "/phone"}
        render={() => <div><h1>123 456 7890</h1></div>}
      />
      <Route
        exact path={match.url + "/email"}
        render={() => <div><h1>email@email.com</h1></div>}
      />
      <Route
        exact path={match.url + "/address"}
        render={() => <div><h1>123 Address</h1></div>}
      />
    </div>
  );
};

const DefaultRoute = ()=> <div><h1>Invalid URL</h1></div>

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink to="/home" activeStyle={{color: 'green'}}><h2>Home</h2></NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle = {{color:'darkorange'}}><h2>About</h2></NavLink>
        </li> 
        <li>
          <Link to="/users/all"><h2>Users</h2></Link>
        </li>
        <li>
          <Link to="/info"><h2>Info</h2></Link>
        </li>
      </ul>
      <hr />
      <Switch>
      <Route exact path="/home" component={Home} />
      <Redirect exact path="/"  to='/home'/>
      <Route path="/about" component={About} />
      <Route path="/info" component={Info} />
      <Route  path="/users/all" render={()=> <div><h1>Users</h1></div>} />
      <Route exact path="/users/:id" component={Users} />
      <Route component={DefaultRoute}/>      
      <Prompt when={true} message="Are you sure you want to leave?"/>   
      </Switch>
    </div>
  </BrowserRouter>
);



render(<App />, document.getElementById("root"));

