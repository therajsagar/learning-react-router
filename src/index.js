import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

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
          <Link to={match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>Email</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>
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

const DefaultRoute = ()=> <div><h1>Incorrect URL</h1></div>

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> 
        <li>
          <Link to="/users/all">Users All</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/info" component={Info} />
      <Route  path="/users/all" render={()=> <div><h1>Users</h1></div>} />
      <Route  path="/users/:id" component={Users} />
      <Route component={DefaultRoute}/>
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));

